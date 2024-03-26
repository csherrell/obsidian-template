---
cssclass: dashboard
banner: "![[home.jpg]]"
banner_x: 0.5
banner_y: 0.8
---

<div class="title" style="color:Sienna">File Listing</div>

#favorite

- 🗄️ Recent file updates
  `$=dv.list(dv.pages('').sort(f=>f.file.mtime.ts,"desc").limit(100).file.link)`
- 🗄️ Oldest file updates
  `$=dv.list(dv.pages('').sort(f=>f.file.mtime.ts,"asc").limit(100).file.link)`

Files with links to uncreated files.

```dataview
TABLE out AS "Uncreated files" FLATTEN file.outlinks as out WHERE !(out.file) AND !contains(meta(out).path, ".") SORT file.name ASC
```