---
title: Projects
description: Projects
subtitle: What I've been working on lately.
image: /images/MS-ADD-03965-013-00113-422r.jpg
toggle: hideall
notitle: true
target: .collapse.project
---

{% for project in site.projects reversed %}
        
<a name="{{project.title | slugify }}"></a>
<h2 class="header-switch-onhover" data-image="{{ project.image }}">
    <a class="plus-icon minus" data-toggle="collapse" data-target=".collapse.{{project.title | replace: ' ', '' | replace: '&', '' }}" data-text="Collapse">{{project.title}}</a>&nbsp;
    {% if forloop.first == true %}
    {% endif %}
</h2>

<div class="collapse project {{project.title | replace: ' ', '' | replace: '&', ''}} show header-switch-onscroll" data-image="{{project.image }}">
    {{ project.content | markdownify }}
</div>
{% endfor %}