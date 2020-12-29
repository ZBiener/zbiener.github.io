---
title: Current Courses
description: Zvi Biener - Teaching
image: /images/british_m.jpeg
notitle: true
toggle: hideall
target: .collapse.fullentry, collapse.grad, collapse.undergrad
---

{% capture numItems %}
{% bibliography_count -q @course[keywords!=grad]  %}
{% endcapture %}

<h2 class="bibliography" style="counter-reset:bibitem {{numItems|plus:1}}">
	<a class="plus-icon minus" data-toggle="collapse"  data-target=".collapse.undergrad" data-text="Collapse">Undergraduate Courses</a>&nbsp;

</h2>


<div class="nolisting collapse undergrad show">
{% bibliography -q @course[keywords!=grad] --template bib_item_course %}
</div>

{% capture numItems %}
{% bibliography_count -q @course[keywords=grad]  %}
{% endcapture %}

<br>
<h2 class="bibliography" style="counter-reset:bibitem {{numItems|plus:1}}">
	<a class="plus-icon minus" data-toggle="collapse"  data-target=".collapse.grad" data-text="Collapse">Graduate Courses</a>&nbsp;
</h2>


<div class="nolisting item_content collapse grad show">
{% bibliography -q @course[keywords=grad] --template bib_item_course %}
</div>



# Overview

According to one formulation, the problem of induction is that our tendency to project past regularities into the future is not, and cannot, be justified with deductive certainty. Well... Duh. Did it really take a giant of Hume's caliber to first notice such a simple fact of logic? And why did he, and later generation, think it was such a big deal? The issue is of perennial interest to philosophers of science as the concepts of 'induction' and 'evidence' are intimately linked -- the problem of induction is not merely about projecting the past into the future, but about drawing any conclusions that extend beyond their evidential base. In this course, we'll investigate the origins of the "problem of induction." We'll see that there have been many forms of "induction" in the history of science. that not all of them were vulnerable to Hume's critique, that there have been several ways to mitigate the varieties of inductive risk, Figures will include Aristotle, Zabarella, Bacon, Boyle, Newton, Hume, Mill, and Norton.


# Method and Goal

Like most graduate courses, we will accomplish this through three main activities: Conversation, Presentation, and Research & Writing. No activity happens in isolation: conversations are informed by previous research, and research is informed by reflection on previous conversations. Presentations serve as a basis for article-length writing, and they are made better by preliminary writing. Reflection on previous conversations is incomplete without being partially written, and reading is almost always incomplete with subsequent conversation. Etc.

The assignments for this course are designed to help you engage in these activities,  discover their interconnections, and determine the connections that most help you to become a better writer,  interlocutor, and  philosopher. As you progress through this course, please repeatedly ask yourself: 

+ what in this assignment worked for me? 
+ what didn't? That is, what was frustrating, took too long, etc.? 
+ if it didn't, why didn't it? 
+ if it worked, how can I use it in other contexts? 

Thinking about these questions will help you discover your own method for taking-in, synthesizing, and creating philosophical ideas. This is the overarching goal of your graduate education.



# Assignments, Grades, and Secondary Goals

20% 
  ~ Participation (Presentation, Note-Taking, and Conversation)

30% 
  ~ Weekly Reading Responses

50% 
  ~ Term Paper

Although 'doing philosophy' is can be a solitary activity, new ideas are most often borne out of engagement with others. Thus, it is crucial that you develop the skills required for good communication and dialogue. Of course, there are many ways to engage in dialogue, as there are many ways to 'do' philosophy. However, we will practice some of the most common: summarizing ideas, active listening, and 'capturing' ideas batted around in conversation.

The class will be entirely conversational, excepting presentations. There is no formal lecture component. We will take a 15 minute break after the first 60 minutes.


## Presentation and Reading Summary/Outline

Each class period, one of you will kick off discussion with an *oral summary/outline* of the reading (5--10 minutes) and brief reﬂection on its problems and open ends. The oral presentation should be accompanied by a *written summary/outline* (no more than 2 pages.) The purpose of the written summary is to have a document that will serve as a guide to the reading, nothing more. It need not be argumentative or authoritative. However, the summary should identify the purpose of the paper (including the author's thesis and the problem to which it is addressed) and briefly outline the author's argumentative steps. If you are like me, you will forget the reading in about a week, and the summary will serve as external memory. In weeks you are presenting, you need not write a reading response. However, your outline should be posted to our Teams group 10AM of our meeting days.


## Note Taking

Each class period, one of you will be the 'scribe.' You'll take notes of our class discussion, on behalf of everyone. This will also serve as external memory. Your notes should be posted to our group space by Friday. 

We will round-robin through presentations and note-taking, but expect to do each at least twice.


## Weekly Reading Responses

By 10AM of class day, please submit a ~250--400  word (no more!) response to the week's reading. Its purpose is to prepare you for that days' discussion. The response can be:

+ a summary of the reading
+ a discussion of a point you found interesting or the author's strategy in arguing for that point
+ an evaluation of the author's position or their strategy
+ how the reading relates to other readings (within or outside the course)
+ an illustration of the author's position vis-à-vis some other subject matter or example

The response must also contain a question you would like to discuss in class. The purpose of these assignments is to make sure that you have done the reading and are prepared to talk about them. You questions will also form the core of our discussion in class. The responses will be graded on a ✓± basis. Unless your work is truly excellent or insufficient for graduate-level work, expect to receive a ✓.

## Term Paper

For better or worse, philosophers are judged predominantly by the quality and quantity of their writing. For this class, you'll write a 5,500-7,500 word paper. The choice of topic is entirely yours (e.g., the topic need not be 'historical). You should prepare to spend more time on the paper during the second half of the course. Paper construction will proceed in stages:

+ Preliminary meeting discuss what interests you and in what directions you can develop your paper (~week 8).
+ A long abstract (~700-1,000 words, week 10)
+ A paper draft (>4,500 words, week 13)
+ A short presentation on your paper to the class, in order to receive feedback (~10 min, week 13--14)
+ A final paper (5,500-7,500 words, end of finals week)



# Policies

**Late Work and Missed Exams:** It is important to submit work by the deadlines. If you foresee missing a deadline or exam, please reach out to me in advance. Homework that has not been granted an extension cannot be submitted later. If something comes up, it is always better to ask me for an extension, even at the last minute.

**Classroom Behavior:** (both online and in-person): I am committed to making our classroom a place where everyone feels safe and respected, and I need your help in achieving that goal. Please help us maintain a respectful and professional learning environment that operates on trust, empathy, cooperation, and respect.

**Absences:** If you miss a class meeting, you are responsible for finding out about what you missed, including any announcements. Missing more than two meetings in a graduate course is only acceptable in exceptional circumstances. 

**Electronic Devices (for in-person classes):** There is an extensive body of research that shows a significant, negative relationship between in-class laptop use and course grades. The studies show that the higher levels of laptop use by students in classrooms are associated with lower levels of attention, understanding of lecture content, and understanding of the course material. The use of laptops not only affects the student’s own performance, but has an impact on the performance of students around them. Therefore, I highly recommend that you do not use a laptop or tablets in class. But it is your choice.

**UC has a wide variety of useful accessibility and support services, I encourage students to take advantage of the resources available to you:**

**Accessibility & Support Services:** Your well-being and success in this course are important to me. There are multiple ways to learn, and every student is entitled to a meaningful and stimulating learning experience. I encourage students to discuss their learning styles and comprehension requirements with me during my office hours or at an appointment. Students with disabilities are also strongly encouraged to avail themselves of the services provided by the University.



**Student Accessibility Services:** If you have a disability (e.g., visual impairment, hearing impairment, physical impairment, communication disorder, and/or specific learning disability, etc.) which may influence your performance in this course, you must meet with the Accessibility Resources Office to arrange for accommodations to ensure an equitable opportunity to meet all the requirements of this course. If you require accommodations, please contact Accessibility Resources at (513)-556-6823, or visit their Campus Location: 210 University Pavilion. You will be provided an Accommodation Form indicating your accommodation needs for the quarter. As soon as possible, please schedule a time to meet with me so that I can sign this form and to ensure your accommodation needs are discussed, agreed upon, and provided.

**Counseling and Psychological Services (CAPS):** CAPS is the counseling center for UC. It helps students adjust to university life, manage personal and situational challenges, manage stress, develop coping strategies, and grow personally and professionally. CAPS's trained clinicians offer individual, group, and couples therapy. Students can access CAPS in a variety of ways, depending on their individual situation. CAPS offers free and confidential initial intake sessions, and no student will be denied further services due to financial barriers. The website is here. https://www.uc.edu/counseling.html.


**Academic Integrity & Avoiding Plagiarism:** Students will be held to the UC Code of Conduct’s rules regarding Academic Misconduct. Familiarize yourself with its definitions of cheating and plagiarism. Note that the University has a Two-Strikes Academic Integrity Policy. 



\newpage

# Schedule

--- -------      -----------------------------------------------------------------
1.  Jan 14       **Contemporary Analysis of the Problem**\
                 [Leah Henderson (SEP) "The Problem of Induction"](https://plato.stanford.edu/entries/induction-problem/)

2.  Jan 21       **Aristotle** \
                 @McCaskey2006a \
                 @Loizides2014   

3.  Jan 28        

4.  Feb 4

5.  Feb 11

6.  Feb 18

7.  Feb 25

8.  Mar 4

9.  Mar 11

10. Mar 18

11. Mar 25

12. Apr 1

13. Apr 8

14. Apr 15

15. Apr 27        **Paper Due**                                           

--- -------      -----------------------------------------------------------------


