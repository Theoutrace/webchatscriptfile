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
  iframe.setAttribute("type", "text/js");
  document.body.appendChild(iframe);
}
prepareFrame();
