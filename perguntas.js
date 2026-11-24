// O ENIGMA DO SERVIDOR FANTASMA — dados das duas narrativas (versão até a Parte 7).
// Caminho A = Investigação Técnica | Caminho B = Investigação Humana.
// Os nomes dos caminhos e as posições NÃO aparecem para o jogador.
// Tipos: entrada (pergunta inicial), avancar, salto, trocar, gameover.
// Posições: 0 início | 1 A1 | 2 B1 | 3 A2 | 4 A3 | 5 A4 | 6 A5
//           7 B2 | 8 B3 | 9 B4 | 10 B5 | 11 final A | 12 final B
export const perguntas = [
  { // 0 — pergunta inicial (duas alternativas)
    caminho: "inicio",
    enunciado:
      "São 02h00 quando o alarme toca: a startup TechShield sofreu " +
      "um ataque grave. Dados confidenciais vazaram e um ransomware " +
      "bloqueou os servidores da empresa. Você é chamado(a) para " +
      "investigar. Por onde você começa?",
    alternativas: [
      {
        texto: "Analisar os logs do servidor em busca de acessos estranhos.",
        afirmacao: ["Decidiu começar analisando os logs do servidor."],
        tipo: "entrada", proxima: 1
      },
      {
        texto: "Interrogar a equipe para entender o que aconteceu.",
        afirmacao: ["Decidiu começar interrogando a equipe da empresa."],
        tipo: "entrada", proxima: 2
      }
    ]
  },
  { // 1 — A1: análise dos logs
    caminho: "A",
    enunciado:
      "Os logs do servidor mostram acessos feitos com as credenciais " +
      "administrativas de Mariana, do Atendimento ao Cliente, a partir " +
      "de um IP remoto suspeito. Como você pretende continuar?",
    alternativas: [
      {
        texto: "Comparar os horários dos acessos com o expediente de Mariana.",
        afirmacao: ["Comparou os horários dos acessos com o expediente de Mariana."],
        tipo: "avancar", proxima: 3
      },
      {
        texto: "Usar a captura de rede já salva pela equipe e rastrear os pacotes.",
        afirmacao: ["Usou a captura de rede da equipe para rastrear os pacotes."],
        tipo: "salto", proxima: 4
      },
      {
        texto: "Interrogar a equipe sobre como as credenciais de Mariana foram usadas.",
        afirmacao: ["Decidiu interrogar a equipe sobre o uso das credenciais."],
        tipo: "trocar", proxima: 2, disponivel: true
      }
    ]
  },
  { // 2 — B1: interrogatório da equipe
    caminho: "B",
    enunciado:
      "Você começa interrogando a equipe. Alex, ex-desenvolvedor, nega " +
      "qualquer envolvimento, alerta sobre senhas fracas e cita um " +
      "e-mail falso de \"Atualização de Sistema\". Mariana diz ter " +
      "clicado em um link que parecia ser da TI. O que você faz?",
    alternativas: [
      {
        texto: "Pedir a Mariana que descreva o link e o e-mail que recebeu.",
        afirmacao: ["Pediu a Mariana que descrevesse o link e o e-mail recebido."],
        tipo: "avancar", proxima: 7
      },
      {
        texto: "Ir direto à caixa de entrada procurar o e-mail de atualização.",
        afirmacao: ["Foi direto à caixa de entrada procurar o e-mail citado."],
        tipo: "salto", proxima: 8
      },
      {
        texto: "Analisar os logs do servidor para conferir o que foi dito.",
        afirmacao: ["Decidiu conferir os depoimentos nos logs do servidor."],
        tipo: "trocar", proxima: 1, disponivel: true
      }
    ]
  },
  { // 3 — A2: o IP remoto suspeito
    caminho: "A",
    enunciado:
      "O IP remoto parece suspeito, mas ainda não há prova de quem o " +
      "controla. Qual atitude você toma?",
    alternativas: [
      {
        texto: "Registrar o IP em um relatório e rastrear os pacotes de rede.",
        afirmacao: ["Registrou o IP em um relatório e passou a rastrear os pacotes."],
        tipo: "avancar", proxima: 4
      },
      {
        texto: "Voltar aos logs e conferir os acessos de outras contas.",
        afirmacao: ["Voltou aos logs para conferir os acessos de outras contas."],
        tipo: "salto", proxima: 1
      },
      {
        texto: "Bloquear o IP imediatamente, antes de coletar evidências.",
        afirmacao: ["Bloqueou o IP cedo demais, sem coletar evidências."],
        tipo: "gameover",
        disponivel: true,
        mensagem:
          "O bloqueio precoce alertou o invasor, que apagou os rastros " +
          "e travou ainda mais os servidores. Você falhou na missão e " +
          "precisa recomeçar."
      }
    ]
  },
  { // 4 — A3: rastreamento dos pacotes
    caminho: "A",
    enunciado:
      "Ao rastrear os pacotes de rede, você percebe dados saindo do " +
      "computador de Mariana para um servidor externo chamado " +
      "Ciber_Shadow. Como você segue?",
    alternativas: [
      {
        texto: "Isolar o computador de Mariana da rede e examiná-lo com cuidado.",
        afirmacao: ["Isolou o computador de Mariana da rede para examiná-lo."],
        tipo: "avancar", proxima: 5
      },
      {
        texto: "Usar a cópia do disco já feita pela equipe e ir ao programa suspeito.",
        afirmacao: ["Usou a cópia do disco da equipe para ir ao programa suspeito."],
        tipo: "salto", proxima: 6
      },
      {
        texto: "Verificar como o ataque começou, examinando a caixa de entrada de Mariana.",
        afirmacao: ["Decidiu examinar a caixa de entrada de Mariana."],
        tipo: "trocar", proxima: 8, disponivel: true
      }
    ]
  },
  { // 5 — A4: o Trojan
    caminho: "A",
    enunciado:
      "No computador isolado, você encontra um Trojan que enviava dados " +
      "para o Ciber_Shadow. O que você faz?",
    alternativas: [
      {
        texto: "Copiar o arquivo para um ambiente seguro e preparar a análise.",
        afirmacao: ["Copiou o Trojan para um ambiente seguro de análise."],
        tipo: "avancar", proxima: 6
      },
      {
        texto: "Voltar ao IP e confirmar se ele pertence ao Ciber_Shadow.",
        afirmacao: ["Voltou ao IP para confirmar a ligação com o Ciber_Shadow."],
        tipo: "salto", proxima: 3
      },
      {
        texto: "Contra-atacar o servidor Ciber_Shadow sem nenhuma proteção.",
        afirmacao: ["Contra-atacou o Ciber_Shadow sem proteção."],
        tipo: "gameover",
        disponivel: true,
        mensagem:
          "O contra-ataque sem proteção expôs a rede da TechShield a " +
          "novas invasões e o caso foi comprometido. Você falhou na " +
          "missão e precisa recomeçar."
      }
    ]
  },
  { // 6 — A5: descompilar o malware
    caminho: "A",
    enunciado:
      "Com o Trojan em um ambiente seguro, falta recuperar a chave de " +
      "descriptografia para liberar os servidores. Qual será sua atitude?",
    alternativas: [
      {
        texto: "Descompilar o malware e extrair a chave de descriptografia.",
        afirmacao: ["Descompilou o malware e extraiu a chave de descriptografia."],
        tipo: "avancar", proxima: 11
      },
      {
        texto: "Voltar ao computador isolado e procurar outras cópias do Trojan.",
        afirmacao: ["Voltou ao computador isolado para procurar outras cópias do Trojan."],
        tipo: "salto", proxima: 5
      },
      {
        texto: "Rastrear a origem do e-mail que pode ter trazido o Trojan.",
        afirmacao: ["Decidiu rastrear a origem do e-mail que trouxe o Trojan."],
        tipo: "trocar", proxima: 10, disponivel: true
      }
    ]
  },
  { // 7 — B2: dúvidas sobre Alex
    caminho: "B",
    enunciado:
      "Alex parece nervoso e alguns colegas desconfiam dele por ser " +
      "ex-desenvolvedor, mas não há provas. Como você continua?",
    alternativas: [
      {
        texto: "Analisar a caixa de entrada em busca do e-mail citado.",
        afirmacao: ["Analisou a caixa de entrada em busca do e-mail citado."],
        tipo: "avancar", proxima: 8
      },
      {
        texto: "Retomar os depoimentos e comparar as versões da equipe.",
        afirmacao: ["Retomou os depoimentos e comparou as versões da equipe."],
        tipo: "salto", proxima: 2
      },
      {
        texto: "Acusar Alex publicamente sem qualquer prova.",
        afirmacao: ["Acusou Alex publicamente sem provas."],
        tipo: "gameover",
        disponivel: true,
        mensagem:
          "A acusação sem provas prejudicou um inocente e interrompeu a " +
          "investigação. Você falhou na missão e precisa recomeçar."
      }
    ]
  },
  { // 8 — B3: o e-mail de phishing
    caminho: "B",
    enunciado:
      "Na caixa de entrada de Mariana aparece o e-mail falso de " +
      "\"Atualização de Sistema\". Tudo indica um ataque de Engenharia " +
      "Social (phishing). Como você prossegue?",
    alternativas: [
      {
        texto: "Examinar o cabeçalho do e-mail para rastrear a origem.",
        afirmacao: ["Examinou o cabeçalho do e-mail para rastrear a origem."],
        tipo: "avancar", proxima: 9
      },
      {
        texto: "Usar o modelo de relatório da empresa e preparar o isolamento da ameaça.",
        afirmacao: ["Usou o modelo de relatório da empresa para preparar o isolamento."],
        tipo: "salto", proxima: 10
      },
      {
        texto: "Rastrear os pacotes de rede para ver para onde os dados foram enviados.",
        afirmacao: ["Decidiu rastrear os pacotes de rede enviados pelo computador."],
        tipo: "trocar", proxima: 4, disponivel: true
      }
    ]
  },
  { // 9 — B4: o cabeçalho do e-mail
    caminho: "B",
    enunciado:
      "O cabeçalho revela um remetente forjado e indícios de um " +
      "servidor externo. Então chega uma mensagem do invasor exigindo " +
      "pagamento. O que você faz?",
    alternativas: [
      {
        texto: "Documentar o cabeçalho e preparar o isolamento da ameaça.",
        afirmacao: ["Documentou o cabeçalho e preparou o isolamento da ameaça."],
        tipo: "avancar", proxima: 10
      },
      {
        texto: "Voltar aos depoimentos para confirmar quem recebeu o e-mail.",
        afirmacao: ["Voltou aos depoimentos para confirmar quem recebeu o e-mail."],
        tipo: "salto", proxima: 7
      },
      {
        texto: "Negociar com o invasor e responder ao pedido de pagamento.",
        afirmacao: ["Tentou negociar com o invasor."],
        tipo: "gameover",
        disponivel: true,
        mensagem:
          "A negociação mostrou ao invasor que a empresa estava vulnerável " +
          "e as exigências aumentaram. Você falhou na missão e precisa " +
          "recomeçar."
      }
    ]
  },
  { // 10 — B5: isolar a ameaça
    caminho: "B",
    enunciado:
      "Com a origem do e-mail rastreada, falta isolar a ameaça e " +
      "solucionar o incidente. Qual será sua atitude?",
    alternativas: [
      {
        texto: "Bloquear o remetente forjado, isolar as contas afetadas e restaurar os sistemas.",
        afirmacao: ["Bloqueou o remetente forjado e isolou as contas afetadas."],
        tipo: "avancar", proxima: 12
      },
      {
        texto: "Voltar ao cabeçalho para conferir a origem mais uma vez.",
        afirmacao: ["Voltou ao cabeçalho para conferir a origem novamente."],
        tipo: "salto", proxima: 9
      },
      {
        texto: "Apagar os e-mails suspeitos para limpar a caixa de entrada.",
        afirmacao: ["Apagou os e-mails suspeitos e destruiu as evidências."],
        tipo: "gameover",
        disponivel: true,
        mensagem:
          "Ao apagar os e-mails, você destruiu as evidências e a origem " +
          "do ataque não pôde ser comprovada. Você falhou na missão e " +
          "precisa recomeçar."
      }
    ]
  },
  { // 11 — final da narrativa A (vitória)
    caminho: "A",
    final: "vitoria",
    enunciado:
      "Você descompilou o malware, recuperou a chave de descriptografia " +
      "e liberou os servidores da TechShield, encerrando o caso do " +
      "servidor fantasma. A missão foi concluída com sucesso. Você venceu!",
    alternativas: []
  },
  { // 12 — final da narrativa B (vitória)
    caminho: "B",
    final: "vitoria",
    enunciado:
      "Você confirmou o ataque de Engenharia Social, rastreou a origem " +
      "pelo cabeçalho do e-mail, isolou a ameaça e solucionou o " +
      "incidente na TechShield. A missão foi concluída com sucesso. " +
      "Você venceu!",
    alternativas: []
  }
];