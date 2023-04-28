---
cssclass: dashboard
banner: "![[home.jpg]]"
banner_x: 0.5
banner_y: 0.8
---
<div class="title" style="color:Sienna">HOME</div>

#favorite #AddATag 

# [[Log]]
# [[FileLists]]
# [[Unresolved Links]]

# Family
- 👨‍👩‍👦 Objectives
	- [[2023 Goals]]
- 🌅 Exotic Vacations 
	- [[Bonaire]]
- 🎥 Movies to Watch
	- 
- 📖 Books to Read
	- [How to Take Smart Notes](https://www.amazon.com/How-Take-Smart-Notes-Nonfiction/dp/1542866502)
 # Personal Projects
- 🏡 Remodeling Projects
	- 
 - ✍️ Writing Projects
	- Read: [Obisidian core principles](https://tfthacker.medium.com/obsidian-understanding-its-core-design-principles-7f3fafbd6e36)
- 📚 Learning
	- 
# Work
- 💼 Projects
	- 
- 💰 Budget review
	- 
- 👥 Personnel Review
	- 
# Vault Info
- 🔖 Tagged:  favorite 
`$=dv.list(dv.pages('#favorite').sort(f=>f.file.name,"desc").limit(4).file.link)`
- 🗄️ Recent file updates
 `$=dv.list(dv.pages('').sort(f=>f.file.mtime.ts,"desc").limit(15).file.link)`
- 🗄️ Oldest file updates
 `$=dv.list(dv.pages('').sort(f=>f.file.mtime.ts,"asc").limit(15).file.link)`
- 〽️ Stats
	-  File Count: `$=dv.pages().length`
	-  Personal recipes: `$=dv.pages('"Family/Recipes"').length`