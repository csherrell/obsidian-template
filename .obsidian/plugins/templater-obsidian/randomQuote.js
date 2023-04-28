const apiUrl = "http://api.quotable.io/random?tags=";

async function start() {
  var quote;
  var cite;
  const response = await fetch(apiUrl);
  const data = await response.json();

  if (response.ok) {
    // Update DOM elements
    quote = data.content;
    cite  = data.author;
  } else {
    quote = "An error occurred";
    console.log(data);
  }

  /* Admonition color
   * This generates the RGB components for a random color.
   * Each component is generated in the 129 to 255 range to look better
   * in dark themes. Remove '128 + ' from each component below for light
   * themes.
   */
  const red = Math.floor(128 + Math.random() * 128);
  const green = Math.floor(128 + Math.random() * 128);
  const blue = Math.floor(128 + Math.random() * 128);

  /* Output
   * This uses a template literal (https://www.javatpoint.com/es6-template-literals) to format the output
   * for the obsidian note. Note that new lines are honored.
   *
   * This outputs a code block that will be formatted by the Admonition (https://github.com/valentine195/obsidian-admonition)
   * plugin.
   */
  return `\`\`\`ad-quote
title: Quote of the Day
color: ${red}, ${green}, ${blue}

${quote}

— <cite>${cite}</cite>
\`\`\``;
}
module.exports = start;
