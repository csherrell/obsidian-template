## Built-ins
### Hotkeys

| Command       | Description                                |
|:------------- |:------------------------------------------ |
| ⌘-D COMMAND-D | Insert A Template                          |
| ⌘-E COMMAND-E | Toggle in and out of edit and preview mode |
| ⌘-N COMMAND-N | New Note                                   |
| ⌘-P COMMAND-P | Open the Command palette.                  |

### [Callouts](https://help.obsidian.md/How+to/Use+callouts)

Admonitions / Callout Blocks / Quotes Blocks are now built into Obsidian as of version v0.14.0. The Admonitions plugin is no longer required. Here are a few examples.

>[!INFO]
>Information

>[!TIP]
> Tip

>[!EXAMPLE]
> Example

### Change Display Text of Internal Links with Pipe (|)

Double brackets are use to create an internal link: `[[New Link]]`. Sometimes you want to have text reference a specific link but not disrupt the flow of the current wording. This is done using the pipe (|) in the internal link like: [[New Link|this text references my new link]]. My pneumonic is **Reference My Text** meaning put in the reference first, followed by the pipe (|) character, followed by the text as you want it to read.

```
[[New Link]]
[[New Link|this is the text that will be shown]]
```

### Mathematics Examples

$[ x^n + y^n = z^n ]$

$Quote + This + is + a + test$

## Plugins
## Obsidian Plugins
### [Advanced Tables](https://github.com/tgrosinger/advanced-tables-obsidian)
This plugin allows for creating Markdown tables in an easier functions. Generating and updating Markdown tables by hand is a cumbersome. This plugin allows for maintaining tables and automatically formatting them. The Hotkeys table above was created with this plugin.

# [Banners](https://github.com/noatpad/obsidian-banners)

The Banners plugin is used to make the Home landing page with an image at the top of the page.

The banner information is put into the yaml front matter.
```
---
cssclass: dashboard
banner: "![[home-1.jpg]]"
banner_x: 0.5
banner_y: 0.8
---
<div class="title" style="color:Sienna">HOME</div>
```




## References

[Obsidian Dashboard](https://thesweetsetup.com/creating-obsidian-dashboard/)

[Obsidian Collaboration With VS Code](https://www.youtube.com/watch?v=d80xGBR3ydE)