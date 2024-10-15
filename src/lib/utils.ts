/* eslint-disable @typescript-eslint/no-unused-vars */
// Utility function to strip HTML tags and remove code block markers (```)
export const stripHtmlTags = (html: string) => {
    // Parse the HTML to get a clean text version
  const doc = new DOMParser().parseFromString(html, 'text/html');

  // Remove any <style> or <script> tags
  const stylesAndScripts = doc.querySelectorAll('style, script');
  stylesAndScripts.forEach((el) => el.remove());

  // Get text content without HTML tags
  let textContent = doc.body.textContent || "";

  // Remove the ```html and closing ```
  textContent = textContent.replace(/```html/g, '').replace(/```/g, '');

  // Remove extra spaces but preserve single newlines
  // Replace multiple spaces with a single space
  textContent = textContent.replace(/[ ]{2,}/g, ' ');
  
  // Replace 3 or more newlines with a double newline (to keep the structure)
  textContent = textContent.replace(/\n{3,}/g, '\n\n');

  return textContent.trim(); // Remove leading and trailing spaces
};