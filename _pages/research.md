---
title: Research
permalink: /research/
description: "Publications, talks, and research experience in low-resource machine translation and endangered-language technology."
---

<p class="eyebrow">Endangered languages / machine translation / speech</p>

My research focuses on language technology for languages with very little training data. I’m particularly interested in **low-resource machine translation**, language documentation, data augmentation, pivot translation, and interactive machine learning.

At the [AI4 Communication Sciences Lab](https://ai4commsci.github.io/), I work with Dr. Emily Prud’hommeaux on the Indigenous languages of Taiwan. My research has been supported by an NSF REU grant focused on Formosan language corpora.

That means a mix of corpus work, synthetic data pipelines, model training, and evaluation. I work with mBART, NLLB, OpenNMT, Fairseq, and high-performance computing. The practical question behind it all: what can we build when the data is scarce?

## Publications

<p class="section-link">Also on <a href="{{ site.author.googlescholar }}">Google Scholar</a>.</p>

{% assign papers = site.publications | sort: "order" | reverse %}
{% for category in site.publication_category %}
### {{ category[1].title }}

{% for paper in papers %}
{% if paper.category == category[0] %}
{% include publication.html item=paper %}
{% endif %}
{% endfor %}
{% endfor %}

## Talks

<ul class="talk-list">
{% assign talks = site.talks | sort: "order" | reverse %}
{% for talk in talks %}
  <li>
    <span class="record-date">{{ talk.month }} {{ talk.year }}</span>
    <div><strong>{{ talk.venue }}</strong> · {{ talk.talk_type }}<br><a href="{{ talk.url | relative_url }}">{{ talk.title }}</a></div>
  </li>
{% endfor %}
</ul>

## Research experience

<dl class="experience-list">
  <div><dt>2026–present</dt><dd><strong>Post-graduate research assistant</strong><br>AI4 Communication Sciences Lab · MGH / Boston College / NSF<br>High-performance computing, machine translation, and automatic speech recognition.</dd></div>
  <div><dt>2023–present</dt><dd><strong>Research assistant</strong><br>AI4 Communication Sciences Lab · MGH / Boston College / NSF<br>NSF REU-funded Formosan MT research. Synthetic data pipelines and evaluation of mBART, NLLB, and OpenNMT.</dd></div>
  <div><dt>2023</dt><dd><strong>Research assistant</strong><br>Pushkin Project · Boston College<br>Behavioral experiments, JavaScript and Selenium testing, and OpenSSF compliance.</dd></div>
</dl>

## Teaching & community

I taught **Data Structures** and served as president of the [Boston College Computer Science Society](https://bccss.co/). I enjoy making the technical parts easier to get into, whether that means a class, a tutorial, or a tool someone can actually use.
