function prepareFrame() {
  var iframe = document.createElement("iframe");
  iframe.setAttribute("src", "https://main--sitewebchat.netlify.app/");
  iframe.setAttribute("style", "position: fixed;bottom: 0;right: 0;");
  document.body.appendChild(iframe);
}
prepareFrame();
