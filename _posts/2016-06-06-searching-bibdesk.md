---
title: Searching BibDesk with Alfred
date: 2016-06-07 
image: '/images/hay.jpeg'
excerpt: If you use [Alfred](https://www.alfredapp.com/) (see [here](/blog/everything-in-its-place "Alfred Post")) and [BibDesk](https://bibdesk.sourceforge.io/ "Optional Title3") (see [here](blog/bibliographies "Bibdesk Post")), you might find the following useful. The script below uses Alfred's "Workflow" feature. It provides a set of commands to search bibliographical entries directly from Alfred, and execute a variety of actions related to citing, opening PDFs, narrowing searches, etc.
categories:
  - Alfred
  - Bibdesk
  - Academic Tools
---

If you use [Alfred](https://www.alfredapp.com/) (see [here](/blog/everything-in-its-place "Alfred Post")) and [BibDesk](https://bibdesk.sourceforge.io/ "Optional Title3") (see [here](blog/bibliographies "Bibdesk Post")), you might find the following useful. The script below uses Alfred's "Workflow" feature. It provides a set of commands to search bibliographical entries directly from Alfred, and execute a variety of actions related to citing, opening PDFs, narrowing searches, etc. [Download it on GitHub](https://github.com/ZBiener/BibDeskQuery/releases/download/v1.0/BibDeskQuery-1.0.alfredworkflow "Workflow Binary"). The basic options are:

**bb X** = search all bibligraphic fields within BibDesk for X

**bt X** = search titles within BibDesk for X

**ba X** = search authors/editors within BibDesk for X

This is what the first option looks like, after I typed in "Cohen":

![BibDesk Lookup](https://zbiener.github.io/images/2016-06-06-searching-bibdesk-1.png)!

Several actions are possible, depending on which modifier keys you press:

+ **enter** = open the entry in BibDesk
+ **shift+enter** = open the file associated with the entry (the plus sign in the entry's icon indicates that there is a file associated with it).
+ **cmd+enter** = copy the citation into the clipboard.
+ **opt+enter** = search the BibDesk GUI using the original search term.
+ **ctrl+enter** = change the search scope, either narrow to author or titles, or broader from authors or title to all search fields (this is like starting the search over).


The citation option is the most complicated and the most useful. After selecting it, you are prompted to enter a page range for the citation (you can leave it blank) and a citation format. I use Pandoc and LaTeX, but it is easy to add/remove other formats from within Alfred.

![Citation Options](https://zbiener.github.io/images/2016-06-06-searching-bibdesk-2.jpg ){:width="80%"}

Then, depending on your selection, you'll get a notification of the item copied into the clipboard. If you are in an active text field --- i.e., if you do all this when working in Word, for example --- the entry is pasted automatically. It looks like this:

![Citation Notification](https://zbiener.github.io/images/2016-06-06-searching-bibdesk-3.png)

The Workflow is based on BibQuery by Hackademic. I modified it to use JSON (instead of XML), and modified the way it interacts with Alfred. Consequently, there is also a lot of dead code in the python scripts. I left it there with the hopes of one day making more search options (keyword, group, etc.) available. The entire flow looks like this:

![Workflow Image](https://zbiener.github.io/images/2016-06-06-searching-bibdesk-4.jpg)
