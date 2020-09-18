---
title: "Keeping Track of Documents and Bibliographies"
date: 2015-12-02 
revised: 2019-10-1
image: '/images/carl_spitzweg.jpg'
excerpt: "Bibliographies for small projects are easy. But they are complicated and time-consuming for larger projects. You should use a bibliography manager. Like BibDesk. It is open-source and easy"
categories:
  - BibDesk
  - Academic Tools
---
Bibliographies for small projects are easy. But they are complicated and time-consuming for larger projects. You should use a bibliography manager. [Zotero](https://www.zotero.org/ "Zotero") is free and flexible. [Papers](https://www.papersapp.com/) is swanky but overrated (IMO). I discuss BibDesk below. It is open-source, easy, and very configurable. 


I started using [BibDesk](https://bibdesk.sourceforge.io/) years ago, when I wrote in LaTeX. That was the the obvious choice at the time, since BibDesk is designed to work with LaTeX. However, I still use BibDesk because I like that it stores bibliographical information in plain text files. Other programs can lock you into a fancy modern database, which makes transporting data or large-scale changes very difficult. BibDesk also has a slew features that makes finding and keeping text easy (auto-filing PDFs according to bibliographic criteria, searching public/private databases like the Library of Congress or JSTOR, etc.). *With the help of PANDOC, BibDesk even works seamlessly with MS-Word documents*. 

BibDesk's one weakness is that there is minimal support for reading its library file on mobile devices. But since that file is just plain text, that limitation is easy to get around.


The basic BibDesk window looks like this. 

![Bibdesk Window](/images/bibdesk1.jpg){ width=100% } 


One the left, you can see smart and static groups. The static groups (in this case) have papers I intend to read on Spinoza, Hobbes and Descartes. The smart group updates in real time and contains all entries with Newton in the title that have been published after 1990. The External group contains entries to external databases (like JSTOR). You can configure whatever groups you like, like you configure playlists in a music player. In the middle, you can see some of the contents of the smart group, as well as the PDF of the second entry.

I religiously add to BibDesk the bibliographical information of anything I read and don't immediately decide is useless. The entire library has 1872 entries, about 60% of which have associated PDFs/Word documents (indicates by a paperclip in the middle panel). Because BibDesk auto-files these PDFs, I have a single folder with virtually everything I ever need (insofar as literature is concerned) for academic work. I can search it, find things I've forgotten about, etc. It is a great resource. It is also very easy to share with colleagues and students.

The data entry window is simple:

![Bibdesk Entry Window](/images/bibdesk2.jpg){ width=100% } 

The dropdown indicates the type of entry (book, article, edited volume, etc.) You can insert notes under the Annote and Abstract tabs. The rest is self-explanatory. 

Note that I've added a field called "Type". It has two values, "Primary" and "Secondary". I use it to indicate whether an entry is, well, a primary or secondary source. You'll see why in a second.

When you drop files on the right-hand pane of the entry box, BibDesk will either link the file to the entry or copy the file to a pre-specified directory. I use BibDesk to file all my PDFs according to, first, type and, then, author. That means all primary sources (if I entered "Primary" in the "Type" field) are grouped together, then separated into folders that correspond to the author(s). BibDesk will rename the file too, according to the scheme of your choice. I use the author, first 5 words of the title, and the year. 

To emulate this, enter the following information in BibDesk "autofile" preferences, modifying the base directory to your needs. 

![Bibdesk Filing Preferences](/images/bibdesk3.jpg){ width=100% } 

There are many more features to explore here. I haven't even mentioned how to use the main one, i.e., how to use BibDesk to make a citation. That will have to wait until I discuss PANDOC.

[Main image: The Bookworm by Carl Spitzweg  (1808–1885)]