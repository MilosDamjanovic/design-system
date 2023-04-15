/*!
 * Sanitize an HTML string
 * (c) 2021 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {String}          str   The HTML string to sanitize
 * @param  {Boolean}         nodes If true, returns HTML nodes instead of a string
 * @return {String|NodeList}       The sanitized string or nodes
 */
export function cleanHTML(str) {
    if (str == null) {
      return '';
    }
    /**
     * Convert the string to an HTML document
     * @return {Node} An HTML document
     */
    function stringToHTML() {
      if (!window.DOMParser) {
        return document.createElement('body');
      }
      let parser = new DOMParser();
      let doc = parser.parseFromString(str, 'text/html');
      return doc.body || document.createElement('body');
    }
  
    /**
     * Remove <script> elements
     * @param  {Node} html The HTML
     */
    function removeScripts(html) {
      let scripts = html.querySelectorAll('script');
      for (let script of scripts) {
        script.remove();
      }
    }
  
    /**
     * Check if the attribute is potentially dangerous
     * @param  {String}  name  The attribute name
     * @param  {String}  value The attribute value
     * @return {Boolean}       If true, the attribute is potentially dangerous
     */
    function isPossiblyDangerous(name, value) {
      let val = value.replace(/\s+/g, '').toLowerCase();
      if (['src', 'href', 'xlink:href'].includes(name)) {
        if (val.includes('javascript:') || val.includes('data:text/html')) return true;
      }
      if (name.startsWith('on')) return true;
    }
  
    /**
     * Remove potentially dangerous attributes from an element
     * @param  {Node} elem The element
     */
    function removeAttributes(elem) {
      // Loop through each attribute
      // If it's dangerous, remove it
      let atts = elem.attributes;
      for (let { name, value } of atts) {
        if (!isPossiblyDangerous(name, value)) continue;
        elem.removeAttribute(name);
      }
    }
  
    /**
     * Remove dangerous stuff from the HTML document's nodes
     * @param  {Node} html The HTML document
     */
    function clean(html) {
      let nodes = html.children;
      for (let node of nodes) {
        removeAttributes(node);
        clean(node);
      }
    }
  
    // Convert the string to HTML
    let html = stringToHTML();
  
    // Sanitize it
    removeScripts(html);
    clean(html);
  
    return html.textContent;
  }
  
  export function clearTagsForHtml(text: string) {
    return text.split('<').join('&lt;').split('>').join('&gt;');
  }
  