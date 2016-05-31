using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using EZECastleIntegration.UI.Okta;

namespace EZECastleIntegration.UI.App_Start.Infrastructure
{
    public class ApiKeyHandler:DelegatingHandler
    {
        private IOktaProvider _oktaProvider;
        public ApiKeyHandler(IOktaProvider oktaProvider)
        {
            _oktaProvider = oktaProvider;
        }
        protected override Task<HttpResponseMessage> SendAsync(HttpRequestMessage request,
            CancellationToken cancellationToken)
        {
            IEnumerable<string> foundValues = null;
            if (request.Headers.TryGetValues("ECIDataToken", out foundValues))
            {
                var values = foundValues as string[] ?? foundValues.ToArray();
                if (values.Length == 1)
                {
                    string token = values.Single();
                    if (_oktaProvider.ValidateSession(token))
                    {
                        return base.SendAsync(request, cancellationToken);
                    }
                }
            }
            return RejectRequest();
        }

        private Task<HttpResponseMessage> RejectRequest()
        {
            var taskCancellationToken = new TaskCompletionSource<HttpResponseMessage>();
            taskCancellationToken.SetResult(new HttpResponseMessage(HttpStatusCode.Unauthorized)
            {
               Content = new StringContent("Missing or invalid authorization token: " + HttpContext.Current.Items["validateSession"])
            });
            return taskCancellationToken.Task;
        }
    }
}