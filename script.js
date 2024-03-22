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
  iframe.setAttribute("id", "iframe_web_chat_id");
  document.body.appendChild(iframe);
  document
    .getElementById("iframe_web_chat_id")
    .contentWindow.postMessage(
      window.location.href,
      `https://main--sitewebchat.netlify.app/?client=${customValue}`
    );
}
prepareFrame();
