document.querySelectorAll('.tab-btn').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const formId = button.getAttribute('data-form');
    document.querySelectorAll('.form-box').forEach(form => {
      form.classList.remove('active');
    });
    document.getElementById(formId).classList.add('active');
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtns = document.querySelectorAll(".toggle-btn-contact");

  toggleBtns.forEach(btn => {
    btn.addEventListener("click", (event) => {
      event.stopPropagation(); // ボタンだけが反応するようにする（aタグに影響しない）
      const content = btn.parentElement.nextElementSibling;
      content.classList.toggle("open");
      btn.classList.toggle("rotate");

      if (content.classList.contains("open")) {
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.style.maxHeight = null;
      }
    });
  });

});