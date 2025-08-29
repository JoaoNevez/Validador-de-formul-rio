const form = document.getElementById('form') as HTMLFormElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const senhaInput = document.getElementById('senha') as HTMLInputElement;
const emailErro = document.getElementById('email-erro') as HTMLElement;
const senhaErro = document.getElementById('senha-erro') as HTMLElement;
const enviarBtn = document.getElementById('enviar') as HTMLButtonElement;
const sucessoMsg = document.getElementById('sucesso') as HTMLElement;

// Checklist items
const reqLen = document.getElementById('req-len') as HTMLLIElement;
const reqNum = document.getElementById('req-num') as HTMLLIElement;
const reqSym = document.getElementById('req-sym') as HTMLLIElement;

function validarEmail(valor: string): boolean {
  // Regex simples e prática para formato básico de e-mail
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(valor);
}

function validarSenha(valor: string) {
  const temTamanho = valor.length >= 8;
  const temNumero = /\d/.test(valor);
  const temSimbolo = /[^A-Za-z0-9]/.test(valor);
  return { temTamanho, temNumero, temSimbolo, ok: temTamanho && temNumero && temSimbolo };
}

function atualizarChecklist() {
  const { temTamanho, temNumero, temSimbolo } = validarSenha(senhaInput.value);
  reqLen.classList.toggle('ok', temTamanho);
  reqNum.classList.toggle('ok', temNumero);
  reqSym.classList.toggle('ok', temSimbolo);
}

function atualizarEstadoBotao() {
  const emailOk = validarEmail(emailInput.value);
  const senhaOk = validarSenha(senhaInput.value).ok;
  enviarBtn.disabled = !(emailOk && senhaOk);
}

emailInput.addEventListener('input', () => {
  if (emailInput.value && !validarEmail(emailInput.value)) {
    emailErro.textContent = 'Formato de e-mail inválido.';
  } else {
    emailErro.textContent = '';
  }
  atualizarEstadoBotao();
});

senhaInput.addEventListener('input', () => {
  const { ok } = validarSenha(senhaInput.value);
  senhaErro.textContent = ok || !senhaInput.value ? '' : 'A senha não atende os requisitos.';
  atualizarChecklist();
  atualizarEstadoBotao();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailOk = validarEmail(emailInput.value);
  const senhaStatus = validarSenha(senhaInput.value);

  if (!emailOk) {
    emailErro.textContent = 'Formato de e-mail inválido.';
  }
  if (!senhaStatus.ok) {
    senhaErro.textContent = 'A senha não atende os requisitos.';
  }

  if (emailOk && senhaStatus.ok) {
    sucessoMsg.textContent = '🎉 Formulário válido! (Aqui você enviaria os dados.)';
    // Reset opcional:
    // form.reset();
    // atualizarChecklist();
    // atualizarEstadoBotao();
  } else {
    sucessoMsg.textContent = '';
  }
});
