# HoneyBee Community - Frontend

Assignees

- 최정혜 (@jeonghye-choi)
- 김동영 (@ehddud1006)

## Prerequisites

- Node.js v16+

### Installation

```bash
git clone https://gitlab.com/ant_community/ant_community_frontend_dev3.git

cd ant_community_frontend_dev3
npm install
# 또는
yarn install

```

### execution

```bash
npm run start
```

<br/>

## Workflow

**GitHub Flow**를 기반으로 작업을 진행합니다.

- 이슈 생성 및 브랜치 생성

  : 작업에 대해, 기능 단위로 이슈 생성 및 브랜치 생성합니다.
  `main` branch는 Stable 상태로 배포되는 브랜치입니다.

- 작업이 끝난 후 Pull Request 생성

  : 기능 개발이 끝나고 머지 준비가 되었을 때, PR을 생성합니다. 해당 PR에 대한 설명을 적고 필요한 경우, `Reviewer`를 지정합니다.

- Merge

  기능에 대한 리뷰가 끝나고 모든 작업이 완료되었다면 `main`에 머지합니다.

### Issues

- 이슈를 만들 때, 다른 팀원들도 이해할 수 있도록 한국어로 작성합니다.

- `Assignee`를 추가합니다.

- 해당 이슈에 대한 내용을 간단하게 작성하고 라벨을 통해 이슈 종류를 구분을 해줍니다. 필요한 경우 라벨을 추가할 수 있습니다.

### Branching

| `(종류)/ISSUE_NUMBER-description`

- e.g. 화면 레이아웃 구성과 관련된 12번 이슈
  - `feat/#12-layout`

### Commit Convention

- 참고: [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) , [Angular Contributing](https://github.com/angular/angular/blob/master/CONTRIBUTING.md)

```
<type>: <short summary>
  |        |
  |        ↳ 커밋 내용 요약.
  |
  ↳ feat|fix|docs|style|refactor|perf|test 중 하나
```

**Type**

- feat: 새로은 기능 추가
- fix: 버그 수정
- docs: 문서화 내용 수정
- style: 코드의 의미에 영향을 주지 않는 변화 (white-space, formatting, missing semi-colons, etc)
- refactor: 새로운 기능을 추가하거나 버그를 수정하지 않는 코드 개선 작업
- perf: 성능 향상 작업
- test: 테스팅 관련 작업
