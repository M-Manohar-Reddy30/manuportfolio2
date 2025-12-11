---

# Badges to add (top of README)
- Build: `![build](https://github.com/OWNER/REPO/actions/workflows/ci.yml/badge.svg)`
- PyPI / npm / license / stars / issues count (use shields.io links)

---

# GitHub Actions CI example (`.github/workflows/ci.yml`)
```yaml
name: CI

on: [push, pull_request]

jobs:
  python-and-node:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        python-version: [3.10]
        node-version: [18]
    steps:
      - uses: actions/checkout@v4

      - name: Setup Python
        uses: actions/setup-python@v4
        with:
          python-version: ${{ matrix.python-version }}

      - name: Install backend deps
        run: |
          cd backend
          python -m pip install --upgrade pip
          pip install -r requirements.txt
          pytest -q

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}

      - name: Install frontend deps & build
        run: |
          cd frontend
          npm ci
          npm run build --if-present
