var customValue = document.currentScript.getAttribute(
  "data-custom-value-web-chat-app"
);

function prepareFrame() {
  var iframe = document.createElement("iframe");
  iframe.setAttribute(
    "src",
    `https://main--sitewebchat.netlify.app/?client=${customValue}`
  );
  iframe.setAttribute("style", "position: fixed;bottom: 0;right: 0;");
  iframe.contentWindow.postMessage(
    window.location.href,
    `https://main--sitewebchat.netlify.app`
  );
  iframe.setAttribute("type", "text/js");
  document.body.appendChild(iframe);
}
prepareFrame();
