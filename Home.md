---
cssclass: dashboard
banner: "![[home.jpg]]"
---
<div class="title" style="color:Sienna">HOME</div>

#favorite

[[ToDo List]]
## Do Now

```tasks
filter by function task.file.filename.includes("ToDo List")
not done
(starts before today) OR (due before today)
```
## Do Later
```tasks
not done
due after today
sort by due
```
# [[Running Log]]

# [[FileLists]]

# Family

- 👨‍👩‍👦 Objectives
  - [[2023 Goals]]
- 🌅 Vacations
  - [[Eclipse Camping Trip]]
- 🎥 Movies to Watch
	- [ ] Blazing Saddles
- 📖 Books to Read
  - [ ] [How to Take Smart Notes](https://www.amazon.com/How-Take-Smart-Notes-Nonfiction/dp/1542866502)
# Personal Projects
- 🏡 Remodeling Projects
  - [ ] Install Smart Light Switches
- ✍️ Writing Projects
  - Read: [Obisidian core principles](https://tfthacker.medium.com/obsidian-understanding-its-core-design-principles-7f3fafbd6e36)
- 📚 Learning
  - [ ] Become and Ansible Guru
# Work

- 💼 Projects
	- [ ] Really [[Super Important Project]]
- 💰 Budget Review
	- [ ] That Cost \$\$\$\$
- 👥 Personnel Review
	- [ ] Get a good review for my awesome skills for building [[Super Important Project]]
# Vault Info

- 🔖 Tagged: favorite
  `$=dv.list(dv.pages('#favorite').sort(f=>f.file.name,"desc").limit(4).file.link)`
- 〽️ Stats
  - File Count: `$=dv.pages().length`
  - Personal recipes: `$=dv.pages('"Family/Recipes"').length`
- 🗄️ Recent file updates
  `$=dv.list(dv.pages('').sort(f=>f.file.mtime.ts,"desc").limit(15).file.link)`
- 🗄️ Oldest file updates
  `$=dv.list(dv.pages('').sort(f=>f.file.mtime.ts,"asc").limit(15).file.link)`
- 〽️ Stats
  - File Count: `$=dv.pages().length`
  - Personal recipes: `$=dv.pages('"Family/Recipes"').length`
