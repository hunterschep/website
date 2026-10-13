---
title: TAME-MT
order: 2
featured: true
stack: Python / Rust / PyPI / Shell
excerpt: "Machine translation evaluation that accounts for the data a system was trained on."
resources:
  - label: PyPI package
    url: https://pypi.org/project/tame-mt/
---

A command-line tool and Python package for **training-aware machine translation evaluation**. Alongside translation quality, it measures how close test examples are to the training corpus.

That helps make overlap and generalization easier to see, especially on small benchmarks. The package combines a Python interface with a Rust backend and is available on PyPI.
