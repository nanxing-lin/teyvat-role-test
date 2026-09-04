(function () {
  const $ = (id) => document.getElementById(id);

  const introScreen = $("intro");
  const quizScreen = $("quiz");
  const resultScreen = $("result");
  const questionTitle = $("quizTitle");
  const questionDomain = $("quizDomain");
  const optionsList = $("optionsList");
  const prevBtn = $("prevBtn");
  const nextBtn = $("nextBtn");
  const progressIndex = $("progressIndex");
  const progressFill = $("progressFill");
  const startBtn = $("startBtn");
  const toast = $("toast");

  let currentIndex = 0;
  let answers = {};

  const rolePools = {};
  Object.keys(ROLES).forEach((key) => {
    rolePools[key] = 0;
  });
  QUESTIONS.forEach((question) => {
    question.options.forEach((option) => {
      Object.entries(option.scores).forEach(([key, value]) => {
        rolePools[key] += value;
      });
    });
  });

  function hideAll() {
    [introScreen, quizScreen, resultScreen].forEach((screen) => screen.classList.add("is-hidden"));
  }

  function show(screen) {
    hideAll();
    screen.classList.remove("is-hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function startTest() {
    currentIndex = 0;
    answers = {};
    show(quizScreen);
    renderQuestion();
  }

  function renderQuestion() {
    const question = QUESTIONS[currentIndex];
    questionTitle.textContent = question.prompt;
    questionDomain.textContent = question.domain;
    progressIndex.textContent = String(currentIndex + 1).padStart(2, "0");
    progressFill.style.width = `${(currentIndex / QUESTIONS.length) * 100}%`;
    prevBtn.disabled = currentIndex === 0;
    nextBtn.textContent = currentIndex === QUESTIONS.length - 1 ? "查看共鸣" : "下一题";

    optionsList.innerHTML = "";
    const savedIndex = answers[currentIndex];
    question.options.forEach((option, optionIndex) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "option-btn";
      button.dataset.opt = "甲乙丙丁".charAt(optionIndex);
      button.textContent = option.text;
      if (savedIndex === optionIndex) {
        button.classList.add("is-selected");
      }
      button.addEventListener("click", () => selectOption(optionIndex));
      optionsList.appendChild(button);
    });

    nextBtn.disabled = savedIndex === undefined;
    $("hintText").textContent = savedIndex === undefined ? "选择一个答案后继续" : "已记录，可随时返回修改";
  }

  function selectOption(optionIndex) {
    answers[currentIndex] = optionIndex;
    const buttons = optionsList.querySelectorAll(".option-btn");
    buttons.forEach((button, index) => {
      button.classList.toggle("is-selected", index === optionIndex);
    });
    nextBtn.disabled = false;
    $("hintText").textContent = "已记录，可随时返回修改";
  }

  function goNext() {
    if (answers[currentIndex] === undefined) {
      return;
    }
    if (currentIndex < QUESTIONS.length - 1) {
      currentIndex += 1;
      renderQuestion();
    } else {
      finishQuiz();
    }
  }

  function goPrev() {
    if (currentIndex > 0) {
      currentIndex -= 1;
      renderQuestion();
    }
  }

  function computeScores() {
    const raw = {};
    Object.keys(ROLES).forEach((key) => {
      raw[key] = 0;
    });

    Object.entries(answers).forEach(([questionIndex, optionIndex]) => {
      const question = QUESTIONS[Number(questionIndex)];
      const option = question.options[optionIndex];
      Object.entries(option.scores).forEach(([key, value]) => {
        raw[key] += value;
      });
    });

    return Object.keys(raw)
      .map((key) => {
        const adjusted = raw[key] / Math.pow(rolePools[key], 0.8);
        return { key, score: adjusted, role: ROLES[key] };
      })
      .sort((a, b) => b.score - a.score);
  }

  function finishQuiz() {
    const ranked = computeScores();
    const main = ranked[0].role;
    const second = ranked.find((entry) => entry.key !== main.key)?.role || ROLES.venti;
    renderResult(main, second);
  }

  function renderResult(main, second) {
    const shareText = `测完了，提瓦特里和我最像的是${main.name}，还带一点${second.name}的影子。`;
    const sameZone = main.region === second.region;
    const sameElement = main.element === second.element;
    const relation = sameZone
      ? `你们都来自${main.region}，却长成了两种不同的性格。`
      : sameElement
        ? `你们不在同一片土地，却在元素共鸣上很接近。`
        : `${second.name}更像你性格里没有完全占主导的另一面，${main.name}则是你更容易被看见的部分。`;

    resultScreen.innerHTML = `
      <article class="result-card" style="--role-color:${main.color}">
        <div class="result-topline">
          <span class="result-badge">第一共鸣 · ${main.name}</span>
          <span class="result-disclaimer">粉丝趣味解读 · 非官方</span>
        </div>

        <div class="hero-result">
          <div class="character-orb" style="--element-color:${main.color}" aria-hidden="true">
            <span>${main.mark}</span>
          </div>
          <div class="hero-copy">
            <h2 id="resultTitle">${main.name}</h2>
            <p class="identity">${main.region} · ${main.element} · ${main.identity}</p>
            <p class="role-line">${main.line}</p>
          </div>
        </div>

        <section class="result-section">
          <h3>为什么像你</h3>
          <ul class="why-list">
            ${main.why.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </section>

        <section class="result-section">
          <div class="second-role" style="--second-color:${second.color}">
            <h3>第二像的角色 · ${second.name}</h3>
            <p class="identity">${second.region} · ${second.element} · ${second.identity}</p>
            <p class="role-line">${second.line}</p>
            <p class="role-line" style="margin-top:14px">${relation}</p>
          </div>
        </section>

        <section class="result-section">
          <h3>提瓦特彩蛋</h3>
          <div class="role-grid">
            <div class="mini-card">
              <h4>一起冒险</h4>
              <p>${main.adventure}</p>
            </div>
            <div class="mini-card">
              <h4>ta 会送你</h4>
              <p>${main.gift}</p>
            </div>
            <div class="mini-card">
              <h4>最容易拌嘴</h4>
              <p>${main.bicker}</p>
            </div>
          </div>
        </section>

        <section class="result-section">
          <h3>缘分页</h3>
          <div class="affinity-grid">
            <div class="affinity-card">
              <span class="tag">最合拍</span>
              <strong>${main.match}</strong>
            </div>
            <div class="affinity-card">
              <span class="tag">最容易吵</span>
              <strong>${main.rival}</strong>
            </div>
            <div class="affinity-card">
              <span class="tag">最佳队友</span>
              <strong>${main.team}</strong>
            </div>
          </div>
        </section>

        <section class="result-share">
          <p>${shareText}</p>
          <button type="button" class="ghost-btn" id="copyResultBtn">复制结果</button>
        </section>

        <div class="result-actions">
          <button type="button" class="primary-btn" id="restartBtn">再测一次</button>
          <button type="button" class="ghost-btn" id="copyBottomBtn">复制分享文案</button>
        </div>
      </article>
    `;

    $("copyResultBtn").addEventListener("click", () => copyText(shareText));
    $("copyBottomBtn").addEventListener("click", () => copyText(shareText));
    $("restartBtn").addEventListener("click", startTest);
    show(resultScreen);
  }

  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      showToast("已复制");
    } catch (error) {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      const copied = document.execCommand("copy");
      textarea.remove();
      showToast(copied ? "已复制" : "请长按文字复制");
    }
  }

  let toastTimer = null;
  function showToast(message) {
    toast.textContent = message;
    toast.classList.remove("is-hidden");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.add("is-hidden"), 1800);
  }

  startBtn.addEventListener("click", startTest);
  prevBtn.addEventListener("click", goPrev);
  nextBtn.addEventListener("click", goNext);
})();
