function prepareFrame() {
  var customValue = document.currentScript.getAttribute(
    "data-custom-value-web-chat-app"
  );
  // Retrieve parent site URL
  var parentSiteURL = window.location.href;

  try {
    // Create iframe element
    var iframe = document.createElement("iframe");

    // Set iframe attributes
    iframe.setAttribute(
      "src",
      `https://main--sitewebchat.netlify.app/?client=${customValue}&parentURL=${encodeURIComponent(
        parentSiteURL
      )}`
    );
    iframe.setAttribute("style", "position: fixed; bottom: 0; right: 0;");
    iframe.setAttribute("id", "iframe_web_chat_id");

    // Append iframe to the document body
    document.body.appendChild(iframe);
  } catch (error) {
    console.error("Error while creating iframe:", error);
  }
}

// Call the function to prepare the frame
prepareFrame();
