export const pressConferenceQuestions = {
  victory: [
    {
      q: 'Como voc� avalia a vit�ria de hoje?',
      opts: [
        { text: 'Foi uma performance completa, os jogadores executaram o plano perfeitamente.', effects: { morale: 3, fans: 2, board: 2, sponsors: 2 } },
        { text: 'Importante resultado, mas ainda temos muito o que melhorar.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } },
        { text: 'Vit�ria suada, o time n�o jogou o que esper�vamos mas conseguiu o resultado.', effects: { morale: 1, fans: -1, board: 1, sponsors: 2 } }
      ]
    },
    {
      q: 'Os f�s est�o muito felizes com a atua��o de hoje. O que voc� tem a dizer?',
      opts: [
        { text: 'Os f�s nos deram uma energia incr�vel, jogamos para eles.', effects: { morale: 3, fans: 5, board: 1, sponsors: 2 } },
        { text: '� natural estarem felizes, ganhamos um jogo importante.', effects: { morale: 1, fans: 2, board: 2, sponsors: 1 } },
        { text: 'Precisamos manter os p�s no ch�o, ainda falta muito na temporada.', effects: { morale: 2, fans: -1, board: 3, sponsors: 1 } }
      ]
    },
    {
      q: 'O desempenho individual de alguns jogadores se destacou. Quem voc� elogiaria?',
      opts: [
        { text: 'Todos merecem elogios, foi um trabalho em equipe.', effects: { morale: 4, fans: 3, board: 2, sponsors: 2 } },
        { text: 'Destacaria o meio-campo, controlaram o jogo do in�cio ao fim.', effects: { morale: 3, fans: 2, board: 3, sponsors: 1 } },
        { text: 'Prefiro n�o destacar ningu�m especificamente, o coletivo venceu.', effects: { morale: 2, fans: 1, board: 2, sponsors: 1 } }
      ]
    },
    {
      q: 'Como voc� descreveria o esp�rito da equipe hoje?',
      opts: [
        { text: 'Incr�vel, os jogadores mostraram uni�o e determina��o.', effects: { morale: 5, fans: 3, board: 3, sponsors: 2 } },
        { text: 'Bom, mas precisamos manter isso nos pr�ximos jogos.', effects: { morale: 2, fans: 1, board: 2, sponsors: 1 } },
        { text: 'O time estava focado e profissional, como sempre.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'Voc� esperava esse resultado antes do jogo?',
      opts: [
        { text: 'Confiei no time, sabia que t�nhamos qualidade para vencer.', effects: { morale: 3, fans: 3, board: 3, sponsors: 2 } },
        { text: 'Sabia que seria um jogo dif�cil, fiquei impressionado com a performance.', effects: { morale: 2, fans: 2, board: 2, sponsors: 1 } },
        { text: 'N�o esperava t�o dominante, superaram minhas expectativas.', effects: { morale: 4, fans: 2, board: 1, sponsors: 3 } }
      ]
    },
    {
      q: 'Como a vit�ria afeta a confian�a do time para os pr�ximos jogos?',
      opts: [
        { text: 'Muito positiva, agora temos momentum.', effects: { morale: 4, fans: 3, board: 2, sponsors: 2 } },
        { text: '� s� mais um passo, n�o podemos relaxar.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } },
        { text: 'Cada jogo � uma nova final, vamos nos preparar da mesma forma.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'Os rivais devem estar preocupados com essa atua��o. Concorda?',
      opts: [
        { text: 'N�o penso nos rivais, foco no meu time.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Claro, mostramos que somos candidatos s�rios.', effects: { morale: 4, fans: 4, board: 2, sponsors: 3 } },
        { text: 'Cada time tem seus objetivos, n�o me preocupo com os outros.', effects: { morale: 2, fans: 1, board: 2, sponsors: 1 } }
      ]
    },
    {
      q: 'A imprensa est� elogiando muito a sua t�tica. O que voc� achou?',
      opts: [
        { text: 'Os jogadores que executaram, eles merecem o m�rito.', effects: { morale: 4, fans: 3, board: 3, sponsors: 2 } },
        { text: 'Foi um trabalho coletivo do corpo t�cnico e dos jogadores.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: '� reconhecimento gratificante, mas o foco � no pr�ximo jogo.', effects: { morale: 2, fans: 1, board: 2, sponsors: 2 } }
      ]
    },
    {
      q: 'Houve algum momento que te preocupou durante o jogo?',
      opts: [
        { text: 'Sim, no primeiro tempo tivemos dificuldades, mas ajustamos no intervalo.', effects: { morale: 2, fans: 1, board: 4, sponsors: 1 } },
        { text: 'N�o, controlamos o jogo do in�cio ao fim.', effects: { morale: 3, fans: 3, board: 2, sponsors: 2 } },
        { text: 'Sempre perigoso, mas confiei na equipe.', effects: { morale: 2, fans: 2, board: 2, sponsors: 1 } }
      ]
    },
    {
      q: 'Como voc� comemorou essa vit�ria importante?',
      opts: [
        { text: 'Comemorei com a equipe, � um momento para compartilhar.', effects: { morale: 4, fans: 3, board: 2, sponsors: 2 } },
        { text: 'J� penso no pr�ximo jogo, n�o h� tempo para relaxar.', effects: { morale: 2, fans: 1, board: 4, sponsors: 1 } },
        { text: 'Em casa com a fam�lia, sempre � bom dividir esses momentos.', effects: { morale: 3, fans: 2, board: 2, sponsors: 1 } }
      ]
    },
    {
      q: 'Os torcedores cantaram seu nome no final do jogo. Como se sentiu?',
      opts: [
        { text: 'Foi emocionante, isso mostra a conex�o com a torcida.', effects: { morale: 4, fans: 5, board: 2, sponsors: 2 } },
        { text: 'Agrade�o, mas o m�rito � dos jogadores em campo.', effects: { morale: 3, fans: 3, board: 3, sponsors: 2 } },
        { text: 'Motivante, isso nos d� energia para continuar trabalhando.', effects: { morale: 3, fans: 4, board: 2, sponsors: 1 } }
      ]
    },
    {
      q: 'A vit�ria veio contra um time forte. Isso tem mais valor?',
      opts: [
        { text: 'Sim, vencer times de qualidade mostra o potencial do elenco.', effects: { morale: 4, fans: 3, board: 4, sponsors: 3 } },
        { text: 'Todos os jogos valem tr�s pontos, independente do advers�rio.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } },
        { text: 'Claro, prova que estamos no caminho certo.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'Como voc� avalia a organiza��o defensiva hoje?',
      opts: [
        { text: 'S�lida, o zagueiro e o goleiro fizeram um trabalho excepcional.', effects: { morale: 3, fans: 2, board: 4, sponsors: 2 } },
        { text: 'Melhorou muito, ainda h� ajustes a fazer.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } },
        { text: 'Perfeita, n�o deram chances claras ao advers�rio.', effects: { morale: 4, fans: 3, board: 3, sponsors: 3 } }
      ]
    },
    {
      q: 'O meio-campo dominou a posse de bola. Era o plano?',
      opts: [
        { text: 'Sim, quer�amos controlar o jogo pela bola.', effects: { morale: 3, fans: 2, board: 4, sponsors: 2 } },
        { text: 'N�o esper�vamos tanta posse, mas fico feliz com o resultado.', effects: { morale: 2, fans: 1, board: 2, sponsors: 1 } },
        { text: 'Os meio-campistas estavam inspirados, fizeram a diferen�a.', effects: { morale: 4, fans: 3, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'A torcida compareceu em massa hoje. Como isso influenciou o time?',
      opts: [
        { text: 'Enormemente, a energia do est�dio nos impulsionou.', effects: { morale: 4, fans: 5, board: 2, sponsors: 3 } },
        { text: 'Sempre ajuda, mas o time estava preparado independentemente.', effects: { morale: 2, fans: 2, board: 3, sponsors: 1 } },
        { text: 'Foi incr�vel, mostrou que temos uma torcida fiel.', effects: { morale: 3, fans: 5, board: 2, sponsors: 2 } }
      ]
    },
    {
      q: 'Voc� faria alguma altera��o para o pr�ximo jogo depois dessa performance?',
      opts: [
        { text: 'Manteria o mesmo time, por que mexer no que est� funcionando?', effects: { morale: 4, fans: 3, board: 2, sponsors: 2 } },
        { text: 'Sim, sempre busco evolu��o, mas sem revolucionar.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } },
        { text: 'Avaliaria o physical dos jogadores antes de decidir.', effects: { morale: 2, fans: 1, board: 4, sponsors: 1 } }
      ]
    },
    {
      q: 'Os jogadores reservas tamb�m contribu�ram. Como gerenciar isso?',
      opts: [
        { text: 'Todos s�o importantes, o elenco � profundo.', effects: { morale: 4, fans: 3, board: 3, sponsors: 2 } },
        { text: 'Fico feliz em ter op��es, a competi��o interna � saud�vel.', effects: { morale: 3, fans: 2, board: 3, sponsors: 1 } },
        { text: '� um problema bom ter, mostra a qualidade do elenco.', effects: { morale: 3, fans: 2, board: 4, sponsors: 2 } }
      ]
    },
    {
      q: 'A vit�ria trouxe mais seguidores nas redes sociais. Voc� se preocupa com isso?',
      opts: [
        { text: 'N�o, o importante � o que acontece em campo.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } },
        { text: '� bom para a marca do clube, mas n�o � prioridade.', effects: { morale: 2, fans: 3, board: 2, sponsors: 3 } },
        { text: 'A torcida precisa se expressar de todas as formas.', effects: { morale: 3, fans: 4, board: 1, sponsors: 2 } }
      ]
    },
    {
      q: 'Como voc� comenta a atua��o do goleiro hoje?',
      opts: [
        { text: 'Excelente, fez defesas importantes quando precisamos.', effects: { morale: 3, fans: 3, board: 3, sponsors: 2 } },
        { text: 'Trabalho s�lido, faz parte do sistema defensivo.', effects: { morale: 2, fans: 2, board: 3, sponsors: 1 } },
        { text: 'Sem palavras, ele � um dos melhores do campeonato.', effects: { morale: 4, fans: 4, board: 3, sponsors: 3 } }
      ]
    },
    {
      q: 'Os sponsors est�o satisfeitos com a exposi��o de hoje. Isso � importante?',
      opts: [
        { text: 'Sim, s�o parte fundamental do clube, precisam estar satisfeitos.', effects: { morale: 2, fans: -1, board: 3, sponsors: 5 } },
        { text: 'O resultado em campo � o que mais importa.', effects: { morale: 3, fans: 3, board: 2, sponsors: 1 } },
        { text: 'Fico feliz que estejam contentes, mas foco no esportivo.', effects: { morale: 2, fans: 2, board: 2, sponsors: 3 } }
      ]
    },
    {
      q: 'A vit�ria coloca o time na disputa pelo t�tulo. O que acha?',
      opts: [
        { text: 'Ainda � cedo para pensar nisso, um jogo por vez.', effects: { morale: 2, fans: 1, board: 4, sponsors: 2 } },
        { text: 'Estamos na disputa sim, � hora de sonhar grande.', effects: { morale: 5, fans: 5, board: 1, sponsors: 3 } },
        { text: 'O campeonato � longo, precisamos de consist�ncia.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'Como voc� descreveria o plano t�tico de hoje em poucas palavras?',
      opts: [
        { text: 'Press�o alta e transi��o r�pida.', effects: { morale: 3, fans: 2, board: 4, sponsors: 2 } },
        { text: 'Controle posicional e paci�ncia na constru��o.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Foco no que o advers�rio n�o esperava.', effects: { morale: 3, fans: 3, board: 2, sponsors: 2 } }
      ]
    },
    {
      q: 'Voc� dedicaria essa vit�ria a algu�m?',
      opts: [
        { text: 'Aos torcedores, eles sempre nos ap�iam.', effects: { morale: 3, fans: 5, board: 1, sponsors: 2 } },
        { text: 'Aos jogadores, trabalharam duro a semana toda.', effects: { morale: 5, fans: 2, board: 2, sponsors: 2 } },
        { text: 'Aos meus familiares, que me d�o suporte.', effects: { morale: 4, fans: 1, board: 1, sponsors: 1 } }
      ]
    },
    {
      q: 'O jogo teve momentos de tens�o. Como gerenciou isso?',
      opts: [
        { text: 'Mantive a calma, transmiti confian�a aos jogadores.', effects: { morale: 3, fans: 2, board: 4, sponsors: 2 } },
        { text: 'A experi�ncia me ajuda nesses momentos.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } },
        { text: 'O time � maduro, soube lidar com a press�o.', effects: { morale: 4, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'Como voc� avalia o trabalho do preparador f�sico depois dessa vit�ria?',
      opts: [
        { text: 'Fundamental, o time aguentou o ritmo do in�cio ao fim.', effects: { morale: 3, fans: 1, board: 4, sponsors: 2 } },
        { text: 'Excelente trabalho, os jogadores estavam em �tima condi��o.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Todo o corpo t�cnico merece cr�dito por essa vit�ria.', effects: { morale: 4, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'A vit�ria foi importante para a classifica��o na copa. Concorda?',
      opts: [
        { text: 'Sim, cada ponto � crucial em mata-mata.', effects: { morale: 3, fans: 3, board: 4, sponsors: 3 } },
        { text: 'N�o penso em classifica��o, penso no pr�ximo jogo.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } },
        { text: 'Passo a passo, mas � claro que � uma vit�ria importante.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'Haver� festa na concentra��o depois dessa vit�ria?',
      opts: [
        { text: 'N�o, foco total no pr�ximo compromisso.', effects: { morale: 2, fans: 1, board: 5, sponsors: 1 } },
        { text: 'Uma breve comemora��o para celebrar o trabalho, sim.', effects: { morale: 4, fans: 3, board: 1, sponsors: 2 } },
        { text: 'Os jogadores merecem, mas com responsabilidade.', effects: { morale: 3, fans: 2, board: 3, sponsors: 1 } }
      ]
    },
    {
      q: 'A imprensa especula que voc� � o melhor t�cnico do campeonato. Comenta?',
      opts: [
        { text: 'N�o me preocupo com especula��es, trabalho pelo clube.', effects: { morale: 3, fans: 2, board: 4, sponsors: 2 } },
        { text: 'Flutuador, mas fico feliz com o reconhecimento.', effects: { morale: 2, fans: 3, board: 2, sponsors: 3 } },
        { text: 'H� muitos t�cnicos bons, � honra fazer parte desse grupo.', effects: { morale: 3, fans: 3, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'Como voc� avalia o desempenho coletivo em compara��o aos �ltimos jogos?',
      opts: [
        { text: 'Muito melhor, encontramos nosso ritmo.', effects: { morale: 4, fans: 3, board: 3, sponsors: 2 } },
        { text: 'Consistente, o trabalho est� dando frutos.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Cada jogo � �nico, n�o gosto de compara��es.', effects: { morale: 2, fans: 1, board: 2, sponsors: 1 } }
      ]
    }
  ],

  draw: [
    {
      q: 'O que aconteceu hoje? O time n�o conseguiu vencer.',
      opts: [
        { text: 'O advers�rio se organizou bem, n�o conseguimos romper a defesa.', effects: { morale: 2, fans: -2, board: 1, sponsors: 1 } },
        { text: 'Faltou efici�ncia nas finaliza��es, criamos chances suficientes.', effects: { morale: 1, fans: -1, board: 2, sponsors: 1 } },
        { text: 'Empate n�o � o resultado que quer�amos, mas n�o perdemos.', effects: { morale: 2, fans: -3, board: 1, sponsors: 1 } }
      ]
    },
    {
      q: 'Os torcedores est�o frustrados com o empate. O que voc� tem a dizer?',
      opts: [
        { text: 'Entendo a frustra��o, n�s tamb�m quer�amos vencer.', effects: { morale: 2, fans: 2, board: 2, sponsors: 1 } },
        { text: 'N�o foi o melhor jogo, mas precisamos do apoio da torcida.', effects: { morale: 3, fans: 3, board: 2, sponsors: 1 } },
        { text: '�s vezes o futebol � assim, nem sempre d� para ganhar.', effects: { morale: 1, fans: -2, board: 1, sponsors: 1 } }
      ]
    },
    {
      q: 'Voc� sente que perdeu duas pontas hoje?',
      opts: [
        { text: 'Sim, claramente. T�nhamos condi��o de vencer.', effects: { morale: 1, fans: -2, board: 1, sponsors: 1 } },
        { text: 'Depende, o advers�rio tamb�m teve suas chances.', effects: { morale: 2, fans: -1, board: 2, sponsors: 1 } },
        { text: 'No futebol, o empate � um resultado poss�vel.', effects: { morale: 2, fans: -3, board: 1, sponsors: 1 } }
      ]
    },
    {
      q: 'O que precisamos ajustar para vencer os pr�ximos jogos?',
      opts: [
        { text: 'A efici�ncia no ataque, precisamos ser mais letais.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } },
        { text: 'Manter a cria��o de chances, os gols v�o chegar.', effects: { morale: 3, fans: 1, board: 2, sponsors: 2 } },
        { text: 'A mentalidade, precisamos de mais garra para decidir jogos.', effects: { morale: 2, fans: 2, board: 2, sponsors: 1 } }
      ]
    },
    {
      q: 'A frustra��o da torcida � v�lida?',
      opts: [
        { text: 'Sim, esperam vit�rias e n�s tamb�m.', effects: { morale: 2, fans: 3, board: 2, sponsors: 1 } },
        { text: 'Entendo, mas o futebol tem altos e baixos.', effects: { morale: 2, fans: 1, board: 2, sponsors: 1 } },
        { text: 'A torcida tem o direito de se expressar.', effects: { morale: 1, fans: 3, board: 1, sponsors: 1 } }
      ]
    },
    {
      q: 'Haver� mudan�as t�ticas para o pr�ximo jogo?',
      opts: [
        { text: 'Avaliarei sim, precisamos encontrar o que funciona melhor.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } },
        { text: 'N�o revolucionaria, o time est� no caminho certo.', effects: { morale: 3, fans: -1, board: 2, sponsors: 2 } },
        { text: 'Cada advers�rio exige um planejamento diferente.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } }
      ]
    },
    {
      q: 'Como manter a concentra��o depois de um empate frustrante?',
      opts: [
        { text: 'Trabalhar duro nos treinos e esquecer o jogo.', effects: { morale: 3, fans: 1, board: 3, sponsors: 2 } },
        { text: 'Analisar os erros e corrigi-los rapidamente.', effects: { morale: 2, fans: 1, board: 4, sponsors: 1 } },
        { text: 'Manter a cabe�a fria, a temporada � longa.', effects: { morale: 3, fans: 2, board: 2, sponsors: 2 } }
      ]
    },
    {
      q: 'A forma dos atacantes est� preocupando?',
      opts: [
        { text: 'Sim, precisamos de mais gols do ataque.', effects: { morale: 1, fans: 1, board: 3, sponsors: 2 } },
        { text: 'N�o, estou confiante que v�o resolver.', effects: { morale: 4, fans: -1, board: 2, sponsors: 1 } },
        { text: 'O time cria oportunidades, os gols v�o vir.', effects: { morale: 3, fans: 1, board: 2, sponsors: 1 } }
      ]
    },
    {
      q: 'Como voc� avalia a atua��o defensiva hoje?',
      opts: [
        { text: 'S�lida, n�o tomamos gols e isso � positivo.', effects: { morale: 3, fans: 1, board: 3, sponsors: 2 } },
        { text: 'Bom, mas precisamos de mais equil�brio entre ataque e defesa.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } },
        { text: 'Defesa funcionou, o problema foi no ataque.', effects: { morale: 2, fans: -1, board: 2, sponsors: 1 } }
      ]
    },
    {
      q: 'O empate mant�m o time na disputa. Isso � positivo?',
      opts: [
        { text: 'Sim, n�o perdemos e mantivemos a vantagem.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'N�o � o ideal, mas n�o � o fim do mundo.', effects: { morale: 2, fans: -1, board: 2, sponsors: 1 } },
        { text: 'Cada ponto conta, estamos na disputa.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } }
      ]
    },
    {
      q: 'Os jogadores pareceram desmotivados no segundo tempo. O que aconteceu?',
      opts: [
        { text: 'O advers�rio fechou bem, foi dif�cil encontrar espa�os.', effects: { morale: 2, fans: -1, board: 2, sponsors: 1 } },
        { text: 'Faltou energia, talvez o physical precise de ajustes.', effects: { morale: 1, fans: 1, board: 3, sponsors: 1 } },
        { text: 'O time n�o desmotivou, s� n�o conseguiu o gol da vit�ria.', effects: { morale: 3, fans: 2, board: 2, sponsors: 1 } }
      ]
    },
    {
      q: 'A press�o da torcida pode afetar o time nos pr�ximos jogos?',
      opts: [
        { text: 'Sempre afeta, mas usamos isso como combust�vel.', effects: { morale: 3, fans: 3, board: 2, sponsors: 2 } },
        { text: 'Os jogadores s�o profissionais, sabem lidar com press�o.', effects: { morale: 3, fans: 1, board: 3, sponsors: 2 } },
        { text: 'A torcida precisa entender que a temporada � longa.', effects: { morale: 2, fans: -2, board: 2, sponsors: 1 } }
      ]
    },
    {
      q: 'Voc� mudaria o esquema t�tico ap�s este empate?',
      opts: [
        { text: 'Avaliaria sim, precisamos de mais dinamismo no ataque.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } },
        { text: 'N�o, o sistema est� funcionando, s� faltou efici�ncia.', effects: { morale: 3, fans: -1, board: 2, sponsors: 2 } },
        { text: 'Cada jogo pede uma abordagem diferente.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } }
      ]
    },
    {
      q: 'Como voc� reage � cobran�a da imprensa?',
      opts: [
        { text: 'Com profissionalismo, sei o que estou fazendo.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Entendo a press�o, faz parte do cargo.', effects: { morale: 2, fans: 1, board: 2, sponsors: 1 } },
        { text: 'N�o me abalo com cr�ticas, foco no trabalho.', effects: { morale: 3, fans: 1, board: 3, sponsors: 1 } }
      ]
    },
    {
      q: 'O que voc� diria aos torcedores agora?',
      opts: [
        { text: 'Pe�o paci�ncia e confian�a, estamos trabalhando para melhorar.', effects: { morale: 3, fans: 4, board: 2, sponsors: 2 } },
        { text: 'Obrigado pelo apoio, sabemos que podemos melhorar.', effects: { morale: 3, fans: 3, board: 2, sponsors: 2 } },
        { text: 'N�o desistam do time, os resultados v�o chegar.', effects: { morale: 4, fans: 4, board: 1, sponsors: 1 } }
      ]
    },
    {
      q: 'A cria��o de jogadas foi suficiente hoje?',
      opts: [
        { text: 'Sim, criamos oportunidades, s� n�o fizemos os gols.', effects: { morale: 3, fans: 1, board: 2, sponsors: 1 } },
        { text: 'Poderia ser melhor, o meio-campo precisa de mais criatividade.', effects: { morale: 1, fans: 1, board: 3, sponsors: 1 } },
        { text: 'Faltou o gol, mas o trabalho coletivo foi bom.', effects: { morale: 3, fans: 2, board: 2, sponsors: 1 } }
      ]
    },
    {
      q: 'Como voc� avalia o desempenho do goleiro?',
      opts: [
        { text: 'Fez um trabalho s�lido, manteve o time no jogo.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'N�o foi testado muito, mas quando precisou, fez a defesa.', effects: { morale: 2, fans: 1, board: 2, sponsors: 1 } },
        { text: 'Trabalho ok, o problema n�o foi na defesa.', effects: { morale: 2, fans: 1, board: 2, sponsors: 1 } }
      ]
    },
    {
      q: 'Voc� considera o empate como uma vit�ria evitada?',
      opts: [
        { text: 'N�o, perdemos duas pontas importantes.', effects: { morale: 1, fans: -2, board: 1, sponsors: 1 } },
        { text: 'Depende da perspectiva, em alguns jogos o empate � bom.', effects: { morale: 2, fans: -1, board: 2, sponsors: 1 } },
        { text: 'Hoje n�o, t�nhamos condi��o de vencer.', effects: { morale: 2, fans: -2, board: 1, sponsors: 1 } }
      ]
    },
    {
      q: 'A recupera��o p�s-jogo ser� importante. Como voc� vai trabalhar isso?',
      opts: [
        { text: 'Sess�o de videoan�lise para corrigir os erros.', effects: { morale: 2, fans: 1, board: 4, sponsors: 1 } },
        { text: 'Treino focado em finaliza��o e efici�ncia.', effects: { morale: 2, fans: 2, board: 3, sponsors: 1 } },
        { text: 'Manter a cabe�a fria e trabalhar normalmente.', effects: { morale: 3, fans: 1, board: 2, sponsors: 2 } }
      ]
    },
    {
      q: 'O empate quebra uma sequ�ncia de vit�rias. Preocupante?',
      opts: [
        { text: 'Um pouco, precisamos retomar o ritmo rapidamente.', effects: { morale: 1, fans: 1, board: 3, sponsors: 1 } },
        { text: 'N�o, toda sequ�ncia chega ao fim. O importante � reagir.', effects: { morale: 3, fans: 2, board: 2, sponsors: 2 } },
        { text: 'O que preocupa � o desempenho, n�o o resultado isolado.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } }
      ]
    },
    {
      q: 'Os laterais tiveram participa��o ofensiva?',
      opts: [
        { text: 'Sim, foram importantes na cria��o, mas faltou precis�o.', effects: { morale: 3, fans: 2, board: 2, sponsors: 1 } },
        { text: 'Poderiam ter participado mais do jogo.', effects: { morale: 1, fans: 1, board: 3, sponsors: 1 } },
        { text: 'O trabalho defensivo deles foi bom, o ataque � coletivo.', effects: { morale: 2, fans: 1, board: 2, sponsors: 1 } }
      ]
    },
    {
      q: 'A concentra��o caiu em algum momento?',
      opts: [
        { text: 'N�o, o time manteve a concentra��o durante os 90 minutos.', effects: { morale: 4, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Um pouco no final, mas o goleiro salvou.', effects: { morale: 2, fans: -1, board: 2, sponsors: 1 } },
        { text: 'O time esteve focado, s� n�o conseguiu o gol.', effects: { morale: 3, fans: 2, board: 2, sponsors: 1 } }
      ]
    },
    {
      q: 'Voc� est� satisfeito com o desempenho geral?',
      opts: [
        { text: 'Parcialmente, o resultado n�o corresponde ao esfor�o.', effects: { morale: 2, fans: 1, board: 2, sponsors: 1 } },
        { text: 'N�o, espero mais dos meus jogadores.', effects: { morale: 1, fans: 1, board: 4, sponsors: 1 } },
        { text: 'O trabalho coletivo foi bom, faltou afinaliza��o.', effects: { morale: 3, fans: 2, board: 2, sponsors: 2 } }
      ]
    },
    {
      q: 'Como voc� v� o restante da temporada depois deste empate?',
      opts: [
        { text: 'Com otimismo, temos time para superar isso.', effects: { morale: 4, fans: 3, board: 3, sponsors: 2 } },
        { text: 'Com cautela, precisamos melhorar.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } },
        { text: 'A temporada � longa, isso � s� mais um jogo.', effects: { morale: 3, fans: 2, board: 2, sponsors: 2 } }
      ]
    },
    {
      q: 'Os jovens jogadores tiveram oportunidade hoje?',
      opts: [
        { text: 'Sim, entraram e mostraram que podem contribuir.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Ainda n�o, mas em breve ter�o suas chances.', effects: { morale: 2, fans: 1, board: 2, sponsors: 1 } },
        { text: 'O foco era o resultado, hoje era jogo para titulares.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } }
      ]
    },
    {
      q: 'A recupera��o f�sica para o pr�ximo jogo � preocupante?',
      opts: [
        { text: 'N�o, o elenco est� preparado e equilibrado.', effects: { morale: 3, fans: 1, board: 3, sponsors: 2 } },
        { text: 'Alguns jogadores sentiram, mas teremos tempo para recuperar.', effects: { morale: 2, fans: 1, board: 2, sponsors: 1 } },
        { text: 'Preparador f�sico est� cuidando disso.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } }
      ]
    },
    {
      q: 'O que voc� aprendeu com este jogo?',
      opts: [
        { text: 'Que precisamos ser mais frios na finaliza��o.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } },
        { text: 'Que o time tem potencial, s� precisa de ajustes.', effects: { morale: 3, fans: 2, board: 2, sponsors: 2 } },
        { text: 'Que cada jogo � uma li��o, estou sempre aprendendo.', effects: { morale: 3, fans: 2, board: 3, sponsors: 1 } }
      ]
    }
  ],

  defeat: [
    {
      q: 'Como voc� comenta a derrota de hoje?',
      opts: [
        { text: 'Foi uma noite dif�cil, assumo total responsabilidade.', effects: { morale: 1, fans: 2, board: 3, sponsors: 1 } },
        { text: 'O advers�rio foi melhor, precisamos reconhecer isso.', effects: { morale: 1, fans: -2, board: 1, sponsors: 1 } },
        { text: 'Inaceit�vel, os jogadores sabem que podem mais.', effects: { morale: 2, fans: -1, board: 4, sponsors: 1 } }
      ]
    },
    {
      q: 'A press�o sobre voc� aumentar� com essa derrota?',
      opts: [
        { text: 'A press�o faz parte do trabalho, estou acostumado.', effects: { morale: 2, fans: 1, board: 3, sponsors: 2 } },
        { text: 'N�o estou preocupado com press�o externa.', effects: { morale: 3, fans: -1, board: 2, sponsors: 1 } },
        { text: 'Foco no trabalho, resultados falam por si.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } }
      ]
    },
    {
      q: 'A torcida est� muito brava. O que voc� tem a dizer a eles?',
      opts: [
        { text: 'Pe�o desculpas, n�o foi o que esper�vamos entregar.', effects: { morale: 1, fans: 4, board: 2, sponsors: 1 } },
        { text: 'Entendo a raiva, n�s tamb�m estamos frustrados.', effects: { morale: 2, fans: 3, board: 2, sponsors: 1 } },
        { text: 'A torcida tem raz�o em cobrar, prometemos reagir.', effects: { morale: 2, fans: 4, board: 1, sponsors: 1 } }
      ]
    },
    {
      q: 'Sua posi��o no clube est� amea�ada?',
      opts: [
        { text: 'Confio no trabalho que estou fazendo no clube.', effects: { morale: 2, fans: 1, board: 4, sponsors: 2 } },
        { text: 'Isso n�o depende de mim, foco no trabalho.', effects: { morale: 1, fans: -1, board: 2, sponsors: 1 } },
        { text: 'Tenho respaldo da diretoria, estou tranquilo.', effects: { morale: 3, fans: -1, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'Como levantar o moral do time depois dessa derrota?',
      opts: [
        { text: 'Conversa com os jogadores, trabalho coletivo.', effects: { morale: 4, fans: 1, board: 2, sponsors: 2 } },
        { text: 'An�lise t�cnica dos erros, treinos intensos.', effects: { morale: 2, fans: 1, board: 4, sponsors: 1 } },
        { text: 'Foco no pr�ximo jogo, esquecemos o que aconteceu.', effects: { morale: 3, fans: 1, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'A raiva dos f�s � justificada?',
      opts: [
        { text: 'Sim, pagam ingressos e merecem mais.', effects: { morale: 1, fans: 4, board: 2, sponsors: 1 } },
        { text: 'Entendo, mas o time precisa de apoio nesses momentos.', effects: { morale: 3, fans: 2, board: 2, sponsors: 1 } },
        { text: 'A torcida tem direito de se manifestar.', effects: { morale: 2, fans: 3, board: 1, sponsors: 1 } }
      ]
    },
    {
      q: 'A confian�a da diretoria em voc� diminuiu?',
      opts: [
        { text: 'Mantenho di�logo aberto com a diretoria.', effects: { morale: 2, fans: 1, board: 4, sponsors: 2 } },
        { text: 'Estou focado no meu trabalho, o resto � especula��o.', effects: { morale: 2, fans: -1, board: 3, sponsors: 1 } },
        { text: 'A diretoria entende o processo, estamos alinhados.', effects: { morale: 3, fans: 1, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'O moral do elenco est� abalado?',
      opts: [
        { text: 'Um pouco, mas � um grupo profissional que vai reagir.', effects: { morale: 3, fans: 2, board: 2, sponsors: 2 } },
        { text: 'Os jogadores s�o fortes, v�o superar isso.', effects: { morale: 4, fans: 1, board: 2, sponsors: 1 } },
        { text: 'Precisamos trabalhar a mentalidade para o pr�ximo jogo.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } }
      ]
    },
    {
      q: 'Qual � o plano de recupera��o?',
      opts: [
        { text: 'Videoan�lise dos erros e treinos focados.', effects: { morale: 2, fans: 1, board: 4, sponsors: 1 } },
        { text: 'Voltar aos fundamentos e trabalhar a confian�a.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Manter a calma e trabalhar normalmente.', effects: { morale: 2, fans: 1, board: 2, sponsors: 1 } }
      ]
    },
    {
      q: 'Haver� mudan�as no time titular?',
      opts: [
        { text: 'Sim, preciso dar oportunidades a quem est� preparado.', effects: { morale: 2, fans: 2, board: 3, sponsors: 1 } },
        { text: 'Avaliarei na semana, n�o posso prometer nada.', effects: { morale: 2, fans: 1, board: 2, sponsors: 1 } },
        { text: 'O time que jogou merece confian�a, mudan�as dr�sticas n�o ajudam.', effects: { morale: 4, fans: -1, board: 2, sponsors: 2 } }
      ]
    },
    {
      q: 'Voc� sente que o time entregou em campo?',
      opts: [
        { text: 'Sim, os jogadores deram tudo, s� n�o foi nosso dia.', effects: { morale: 4, fans: 2, board: 2, sponsors: 2 } },
        { text: 'H� momentos que questiono a entrega, mas confio no grupo.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } },
        { text: 'Os jogadores s�o profissionais, deram o que tinham.', effects: { morale: 3, fans: 2, board: 2, sponsors: 2 } }
      ]
    },
    {
      q: 'A press�o externa afeta seu trabalho?',
      opts: [
        { text: 'Sim, mas aprendi a administrar ao longo da carreira.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'N�o, foco apenas no que posso controlar.', effects: { morale: 3, fans: 1, board: 3, sponsors: 2 } },
        { text: 'Faz parte da profiss�o, n�o me abala.', effects: { morale: 2, fans: 1, board: 2, sponsors: 1 } }
      ]
    },
    {
      q: 'O que precisamos mudar para reagir?',
      opts: [
        { text: 'Atitude e mentalidade em campo.', effects: { morale: 2, fans: 2, board: 3, sponsors: 1 } },
        { text: 'Aspectos t�ticos, o time precisa de ajustes.', effects: { morale: 2, fans: 1, board: 4, sponsors: 1 } },
        { text: 'Confian�a, os jogadores precisam acreditar mais.', effects: { morale: 4, fans: 2, board: 2, sponsors: 2 } }
      ]
    },
    {
      q: 'Os titulares est�o seguros?',
      opts: [
        { text: 'Ningu�m � intoc�vel, todos podem ser substitu�dos.', effects: { morale: 1, fans: 2, board: 4, sponsors: 1 } },
        { text: 'Avaliarei cada caso na semana.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } },
        { text: 'Confio nos titulares, mas a concorr�ncia � boa.', effects: { morale: 3, fans: 1, board: 2, sponsors: 2 } }
      ]
    },
    {
      q: 'Como voc� avalia a t�tica usada hoje?',
      opts: [
        { text: 'N�o funcionou como esperado, preciso repensar.', effects: { morale: 1, fans: 1, board: 3, sponsors: 1 } },
        { text: 'A t�tica n�o foi o problema, a execu��o sim.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } },
        { text: 'O time precisa se adaptar melhor ao sistema.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } }
      ]
    },
    {
      q: 'H� risco de demiss�o?',
      opts: [
        { text: 'N�o acredito, mas estou ciente das expectativas.', effects: { morale: 2, fans: 1, board: 4, sponsors: 2 } },
        { text: 'Isso � decis�o da diretoria, foco no trabalho.', effects: { morale: 1, fans: -1, board: 3, sponsors: 1 } },
        { text: 'Tenho contrato e confian�a para reverter a situa��o.', effects: { morale: 3, fans: 1, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'Como voc� descreve o momento atual do time?',
      opts: [
        { text: 'Dif�cil, mas � um obst�culo que vamos superar.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Passando por um mau momento, precisa de trabalho duro.', effects: { morale: 1, fans: 1, board: 3, sponsors: 1 } },
        { text: 'Momento de reflex�o e retomada.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } }
      ]
    },
    {
      q: 'A derrota compromete os objetivos da temporada?',
      opts: [
        { text: 'N�o, ainda estamos no caminho, � cedo para desistir.', effects: { morale: 4, fans: 3, board: 3, sponsors: 2 } },
        { text: 'Um pouco, precisamos ganhar os pr�ximos jogos.', effects: { morale: 2, fans: 1, board: 4, sponsors: 1 } },
        { text: 'A temporada � longa, h� tempo para reagir.', effects: { morale: 3, fans: 2, board: 2, sponsors: 2 } }
      ]
    },
    {
      q: 'Os jogadores assumiram a responsabilidade?',
      opts: [
        { text: 'Sim, o grupo � maduro e sabe que erramos coletivamente.', effects: { morale: 4, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Alguns sim, outros precisam amadurecer.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } },
        { text: 'O time � unido, ningu�m jogar� a culpa nos outros.', effects: { morale: 3, fans: 2, board: 2, sponsors: 2 } }
      ]
    },
    {
      q: 'Como voc� v� os pr�ximos desafios?',
      opts: [
        { text: 'Desafiadores, mas temos qualidade para superar.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Dif�ceis, precisamos melhorar muito.', effects: { morale: 1, fans: 1, board: 4, sponsors: 1 } },
        { text: 'Cada jogo � uma oportunidade de reagir.', effects: { morale: 3, fans: 2, board: 2, sponsors: 2 } }
      ]
    },
    {
      q: 'A recupera��o f�sica e mental ser� trabalhada?',
      opts: [
        { text: 'Sim, o departamento m�dico e psicol�gico est�o envolvidos.', effects: { morale: 3, fans: 1, board: 4, sponsors: 2 } },
        { text: 'Claro, o time precisa estar 100% para reagir.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Trabalho coletivo, todos precisam se recuperar juntos.', effects: { morale: 4, fans: 2, board: 2, sponsors: 2 } }
      ]
    },
    {
      q: 'O que voc� diria aos jovens jogadores?',
      opts: [
        { text: 'Que aprendam com os erros e sigam trabalhando.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Que essa � parte da carreira, precisam ser fortes.', effects: { morale: 3, fans: 2, board: 2, sponsors: 1 } },
        { text: 'Que oportunidades vir�o, precisam estar preparados.', effects: { morale: 4, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'A imprensa est� cobrando demiss�o. Comenta?',
      opts: [
        { text: 'N�o me preocupo com especula��es, trabalho pelo clube.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Espero ter paci�ncia da diretoria para reverter.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } },
        { text: 'A imprensa sempre exagera, foco no trabalho.', effects: { morale: 2, fans: 1, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'H� algo positivo para levar deste jogo?',
      opts: [
        { text: 'A atitude dos jogadores em alguns momentos.', effects: { morale: 3, fans: 2, board: 2, sponsors: 2 } },
        { text: 'Acredito que aprendemos li��es importantes.', effects: { morale: 3, fans: 1, board: 3, sponsors: 1 } },
        { text: 'Dif�cil encontrar, mas precisamos ser honestos.', effects: { morale: 1, fans: 1, board: 3, sponsors: 1 } }
      ]
    },
    {
      q: 'Voc� manter� o esquema t�tico?',
      opts: [
        { text: 'Preciso avaliar, pode haver ajustes.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } },
        { text: 'Sim, confio no sistema, s� precisamos executar melhor.', effects: { morale: 3, fans: -1, board: 2, sponsors: 2 } },
        { text: 'A cada jogo analiso o que funciona.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } }
      ]
    },
    {
      q: 'Como voc� avalia o trabalho do corpo t�cnico?',
      opts: [
        { text: 'O trabalho est� certo, o time precisa executar melhor.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } },
        { text: 'Todos precisamos melhorar, inclusive o corpo t�cnico.', effects: { morale: 2, fans: 2, board: 4, sponsors: 1 } },
        { text: 'Trabalho profissional, estou confiante na retomada.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'Os f�s podem protestar. Como voc� se prepara?',
      opts: [
        { text: 'Entendo, � direito deles. Vamos trabalhar para reconquistar.', effects: { morale: 3, fans: 3, board: 2, sponsors: 2 } },
        { text: 'N�o posso controlar isso, foco no trabalho.', effects: { morale: 2, fans: -1, board: 3, sponsors: 1 } },
        { text: 'Espero que o tempo mostre que estamos no caminho certo.', effects: { morale: 2, fans: 1, board: 3, sponsors: 2 } }
      ]
    }
  ],

  heavy_loss: [
    {
      q: 'Como voc� comenta uma derrota t�o avassaladora?',
      opts: [
        { text: 'Inaceit�vel, n�o tenho palavras para descrever.', effects: { morale: -2, fans: -3, board: 1, sponsors: 1 } },
        { text: 'Foi um pesadelo, assumo total responsabilidade.', effects: { morale: 1, fans: 2, board: 3, sponsors: 1 } },
        { text: 'O time n�o funcionou em nenhum aspecto, precisamos de uma reflex�o profunda.', effects: { morale: 1, fans: -1, board: 3, sponsors: 1 } }
      ]
    },
    {
      q: 'A torcida est� em choque. O que voc� tem a dizer?',
      opts: [
        { text: 'Eu tamb�m estou em choque, compartilhamos da mesma dor.', effects: { morale: 1, fans: 3, board: 2, sponsors: 1 } },
        { text: 'Pe�o desculpas, n�o era isso que esper�vamos entregar.', effects: { morale: 1, fans: 4, board: 2, sponsors: 1 } },
        { text: 'A torcida merece mais, vamos reagir.', effects: { morale: 2, fans: 4, board: 1, sponsors: 1 } }
      ]
    },
    {
      q: 'Haver� demiss�es depois dessa goleada?',
      opts: [
        { text: 'Isso � decis�o da diretoria, n�o posso comentar.', effects: { morale: 1, fans: -1, board: 3, sponsors: 2 } },
        { text: 'Estou no cargo e vou trabalhar para reverter.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } },
        { text: 'N�o acredito que mudan�as bruscas resolvem.', effects: { morale: 3, fans: 1, board: 2, sponsors: 2 } }
      ]
    },
    {
      q: 'Os protestos dos f�s s�o esperados. Como reage?',
      opts: [
        { text: 'Com respeito, eles t�m todo o direito de protestar.', effects: { morale: 1, fans: 4, board: 1, sponsors: 1 } },
        { text: 'Entendo, mas o time precisa de apoio agora mais que nunca.', effects: { morale: 3, fans: 3, board: 2, sponsors: 1 } },
        { text: 'N�o posso controlar isso, foco no trabalho.', effects: { morale: 1, fans: -2, board: 3, sponsors: 1 } }
      ]
    },
    {
      q: 'A diretoria est� pressionando. Sua posi��o?',
      opts: [
        { text: 'Mantenho di�logo com a diretoria, trabalhamos juntos.', effects: { morale: 2, fans: 1, board: 4, sponsors: 2 } },
        { text: 'Foco no trabalho, decis�es de cargo n�o dependem s� de mim.', effects: { morale: 1, fans: -1, board: 2, sponsors: 1 } },
        { text: 'Tenho respaldo para reverter essa situa��o.', effects: { morale: 3, fans: 1, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'Ser� necess�rio um rebuild do elenco?',
      opts: [
        { text: 'N�o vou especular, preciso analisar com calma.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } },
        { text: 'Talvez ajustes sejam necess�rios, mas n�o revolu��o.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } },
        { text: 'O elenco tem qualidade, precisa de tempo.', effects: { morale: 4, fans: 2, board: 2, sponsors: 2 } }
      ]
    },
    {
      q: 'Como levantar o time depois de ser goleado?',
      opts: [
        { text: 'Conversa direta, trabalho coletivo e foco no pr�ximo jogo.', effects: { morale: 4, fans: 2, board: 2, sponsors: 2 } },
        { text: 'Videoan�lise e treinos para corrigir os erros.', effects: { morale: 2, fans: 1, board: 4, sponsors: 1 } },
        { text: 'Manter a cabe�a firme, reagir � karakter dos fortes.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'A t�tica usada foi um desastre?',
      opts: [
        { text: 'N�o funcionou, preciso repensar abordagens.', effects: { morale: 1, fans: 1, board: 3, sponsors: 1 } },
        { text: 'O problema n�o foi s� t�tico, foi coletivo.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } },
        { text: 'Os jogadores n�o executaram o que foi treinado.', effects: { morale: 2, fans: 1, board: 4, sponsors: 1 } }
      ]
    },
    {
      q: 'Os jogadores deram o que tinham?',
      opts: [
        { text: 'D�vido, houve momentos de desist�ncia em campo.', effects: { morale: -1, fans: 2, board: 4, sponsors: 1 } },
        { text: 'Sim, mas o advers�rio foi muito superior.', effects: { morale: 2, fans: -1, board: 1, sponsors: 1 } },
        { text: 'H� questionamentos, vou conversar individualmente.', effects: { morale: 1, fans: 1, board: 3, sponsors: 1 } }
      ]
    },
    {
      q: 'A confian�a da torcida em voc� acabou?',
      opts: [
        { text: 'N�o sei, mas vou trabalhar para reconquistar.', effects: { morale: 1, fans: 3, board: 2, sponsors: 1 } },
        { text: 'Espero que n�o, mas entendo a frustra��o.', effects: { morale: 2, fans: 2, board: 2, sponsors: 1 } },
        { text: 'Preciso mostrar trabalho em campo, palavras n�o bastam.', effects: { morale: 2, fans: 2, board: 3, sponsors: 1 } }
      ]
    },
    {
      q: 'A derrota revelou problemas mais profundos?',
      opts: [
        { text: 'Sim, precisamos de uma avalia��o completa do elenco.', effects: { morale: 1, fans: 1, board: 4, sponsors: 1 } },
        { text: 'Foi uma noite ruim, n�o vou tirar conclus�es precipitadas.', effects: { morale: 3, fans: 1, board: 2, sponsors: 2 } },
        { text: 'Problemas existem, mas s�o solucion�veis.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'Como voc� avalia seu trabalho depois disso?',
      opts: [
        { text: 'Com honestidade, estou decepcionado comigo mesmo.', effects: { morale: 1, fans: 3, board: 3, sponsors: 1 } },
        { text: 'Sinto que poderia ter feito diferente.', effects: { morale: 1, fans: 2, board: 2, sponsors: 1 } },
        { text: 'O trabalho � cont�nuo, uma derrota n�o define tudo.', effects: { morale: 3, fans: 1, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'Haver� mudan�as imediatas no elenco?',
      opts: [
        { text: 'Avaliarei na semana, mudan�as podem acontecer.', effects: { morale: 2, fans: 2, board: 3, sponsors: 1 } },
        { text: 'N�o vou especular sobre escala��es futuras.', effects: { morale: 2, fans: 1, board: 2, sponsors: 1 } },
        { text: 'O time que entrou hoje tem minha confian�a.', effects: { morale: 4, fans: -1, board: 2, sponsors: 2 } }
      ]
    },
    {
      q: 'O clube passar� por uma crise?',
      opts: [
        { text: 'N�o acredito, mas � um momento dif�cil.', effects: { morale: 2, fans: 1, board: 3, sponsors: 2 } },
        { text: 'Crises fazem parte, o importante � reagir.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'O clube � maior que uma derrota.', effects: { morale: 3, fans: 3, board: 2, sponsors: 2 } }
      ]
    },
    {
      q: 'A temporada est� comprometida?',
      opts: [
        { text: 'N�o, ainda h� muito jogo pela frente.', effects: { morale: 4, fans: 3, board: 2, sponsors: 2 } },
        { text: 'Sim, foi um golpe grande, mas n�o desistimos.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } },
        { text: 'Precisamos reagir r�pido para n�o afundar.', effects: { morale: 2, fans: 1, board: 4, sponsors: 1 } }
      ]
    },
    {
      q: 'A recupera��o mental dos jogadores ser� trabalhada?',
      opts: [
        { text: 'Sim, o psic�logo do clube j� est� envolvido.', effects: { morale: 3, fans: 1, board: 4, sponsors: 2 } },
        { text: 'Claro, precisamos de cabe�a fria para reagir.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Os jogadores s�o profissionais, v�o se recuperar.', effects: { morale: 3, fans: 2, board: 2, sponsors: 2 } }
      ]
    },
    {
      q: 'Os sponsors podem recuar. Preocupado?',
      opts: [
        { text: 'N�o posso pensar nisso agora, foco no futebol.', effects: { morale: 2, fans: 1, board: 3, sponsors: 2 } },
        { text: 'Manterei di�logo com eles, somos parceiros.', effects: { morale: 2, fans: 1, board: 3, sponsors: 4 } },
        { text: 'Os resultados em campo s�o o que mant�m os parceiros.', effects: { morale: 2, fans: 1, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'O que voc� aprendeu com essa derrota?',
      opts: [
        { text: 'Que precisamos ser mais unidos e trabalhar mais.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Que o futebol � imprevis�vel e temos que estar preparados.', effects: { morale: 2, fans: 1, board: 2, sponsors: 1 } },
        { text: 'Que ainda temos muito o que melhorar.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } }
      ]
    },
    {
      q: 'A imprensa est� pregando sua demiss�o. Comenta?',
      opts: [
        { text: 'N�o me preocupo com isso, trabalho pelo clube.', effects: { morale: 3, fans: 1, board: 3, sponsors: 2 } },
        { text: 'Espero ter chance de reverter.', effects: { morale: 1, fans: 1, board: 3, sponsors: 1 } },
        { text: 'A imprensa sempre exagera, foco no trabalho.', effects: { morale: 2, fans: 1, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'Como voc� descreve a atitude dos jogadores?',
      opts: [
        { text: 'Inaceit�vel em alguns momentos, vou cobrar.', effects: { morale: 1, fans: 2, board: 4, sponsors: 1 } },
        { text: 'Os jogadores est�o cientes do erro.', effects: { morale: 2, fans: 1, board: 2, sponsors: 1 } },
        { text: 'O grupo � forte, vai reagir.', effects: { morale: 4, fans: 2, board: 2, sponsors: 2 } }
      ]
    },
    {
      q: 'A torcida deve cancelar suas assinaturas. Reage?',
      opts: [
        { text: 'Respeito todas as decis�es, mas pe�o para n�o desistir.', effects: { morale: 1, fans: 4, board: 1, sponsors: 2 } },
        { text: 'A torcida � fundamental, n�o posso perd�-los.', effects: { morale: 1, fans: 3, board: 1, sponsors: 1 } },
        { text: 'Vamos reconquistar a confian�a com trabalho.', effects: { morale: 2, fans: 2, board: 3, sponsors: 1 } }
      ]
    },
    {
      q: 'H� algo positivo para levar deste jogo?',
      opts: [
        { text: 'Dif�cil encontrar, mas a honestidade � o primeiro passo.', effects: { morale: 2, fans: 2, board: 3, sponsors: 1 } },
        { text: 'Aprendemos o que n�o fazer novamente.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } },
        { text: 'Acredito que ser� um catalisador para mudan�as positivas.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'A rea��o do time ser� imediata?',
      opts: [
        { text: 'Trabalharemos para que sim, n�o pode se repetir.', effects: { morale: 3, fans: 2, board: 4, sponsors: 2 } },
        { text: 'Espero que sim, mas preciso de tempo.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } },
        { text: 'A rea��o come�a agora, nos treinos.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'Voc� j� considerou pedir demiss�o?',
      opts: [
        { text: 'N�o, tenho compromisso com o projeto.', effects: { morale: 3, fans: 2, board: 4, sponsors: 2 } },
        { text: 'Nunca, luto at� o �ltimo minuto.', effects: { morale: 4, fans: 3, board: 3, sponsors: 2 } },
        { text: 'Isso n�o depende s� de mim.', effects: { morale: 1, fans: -1, board: 3, sponsors: 1 } }
      ]
    },
    {
      q: 'O que a diretoria espera de voc� agora?',
      opts: [
        { text: 'Que reaja e mostre evolu��o nos pr�ximos jogos.', effects: { morale: 2, fans: 1, board: 5, sponsors: 1 } },
        { text: 'Que tenha calma e trabalhe com profissionalismo.', effects: { morale: 3, fans: 1, board: 3, sponsors: 2 } },
        { text: 'Que reconquiste a confian�a da torcida.', effects: { morale: 3, fans: 3, board: 3, sponsors: 1 } }
      ]
    }
  ],

  tactical: [
    {
      q: 'Por que voc� escolhe esse esquema t�tico?',
      opts: [
        { text: '� o que melhor se adapta �s caracter�sticas do elenco.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Foi desenvolvido ao longo do tempo, funciona.', effects: { morale: 3, fans: 1, board: 3, sponsors: 2 } },
        { text: 'Cada jogo exige uma abordagem diferente.', effects: { morale: 2, fans: 1, board: 2, sponsors: 1 } }
      ]
    },
    {
      q: 'O time pressiona alto. Por qu�?',
      opts: [
        { text: 'Para recuperar a bola r�pido e atacar.', effects: { morale: 3, fans: 3, board: 2, sponsors: 2 } },
        { text: 'O elenco tem qualidade para isso.', effects: { morale: 4, fans: 2, board: 3, sponsors: 2 } },
        { text: '� parte da identidade do time.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'Voc� prefere posse de bola ou contra-ataque?',
      opts: [
        { text: 'Posse de bola, controle o jogo.', effects: { morale: 3, fans: 2, board: 4, sponsors: 2 } },
        { text: 'Contra-ataque, � mais eficiente.', effects: { morale: 3, fans: 3, board: 2, sponsors: 2 } },
        { text: 'Depende do advers�rio, sou pragm�tico.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } }
      ]
    },
    {
      q: 'Como voc� organiza a defesa?',
      opts: [
        { text: 'Linha alta com compacta��o, n�o dar espa�o ao advers�rio.', effects: { morale: 3, fans: 2, board: 4, sponsors: 2 } },
        { text: 'Linha baixa e organizada, n�o tomar gols.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } },
        { text: 'Adapto conforme o advers�rio.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } }
      ]
    },
    {
      q: 'As jogadas de bola parada s�o importantes?',
      opts: [
        { text: 'Sim, treinamos bastante isso.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Sim, podem decidir jogos apertados.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'S�o oportunidades que n�o podemos desperdi�ar.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'Como voc� gerencia o jogo quando est� na frente?',
      opts: [
        { text: 'Mantendo a posse e controlando o ritmo.', effects: { morale: 3, fans: 1, board: 3, sponsors: 2 } },
        { text: 'Buscando o gol para fechar a partida.', effects: { morale: 3, fans: 3, board: 2, sponsors: 2 } },
        { text: 'Mantendo a organiza��o, n�o dar chance ao advers�rio.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'O que voc� mudaria na t�tica atual?',
      opts: [
        { text: 'Nada, est� funcionando.', effects: { morale: 4, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Pequenos ajustes conforme o advers�rio.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } },
        { text: 'Preciso evoluir, sempre busco melhorias.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'A profundidade das laterais � importante?',
      opts: [
        { text: 'Sim, abrem o campo e criam superioridade.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Depende do jogo, �s vezes � mais importante defender.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } },
        { text: 'Faz parte do nosso modelo de jogo.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'Como voc� prepara o time para um advers�rio forte?',
      opts: [
        { text: 'An�lise detalhada e treinos espec�ficos.', effects: { morale: 3, fans: 2, board: 4, sponsors: 2 } },
        { text: 'Mantenho nossa identidade de jogo.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Adapto o plano t�tico para explorar fraquezas.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'O meio-campo precisa de mais criatividade?',
      opts: [
        { text: 'Sim, estamos criando poucas oportunidades.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } },
        { text: 'N�o, o meio-campo est� funcionando bem.', effects: { morale: 4, fans: 2, board: 3, sponsors: 2 } },
        { text: 'O problema � a finaliza��o, n�o a cria��o.', effects: { morale: 2, fans: 1, board: 2, sponsors: 1 } }
      ]
    },
    {
      q: 'Como voc� v� o jogo r�pido?',
      opts: [
        { text: '� eficiente, o time transiciona bem.', effects: { morale: 3, fans: 3, board: 3, sponsors: 2 } },
        { text: 'Poder�amos ser mais r�pidos na transi��o.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } },
        { text: 'O jogo r�pido � nossa identidade.', effects: { morale: 4, fans: 3, board: 2, sponsors: 2 } }
      ]
    },
    {
      q: 'A sa�da de bola pela defesa � um risco?',
      opts: [
        { text: 'Sim, mas � necess�ria para controlar o jogo.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } },
        { text: 'Treinamos bastante, os jogadores sabem o que fazer.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: '�s vezes � arriscado, mas o ganho compensa.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } }
      ]
    },
    {
      q: 'O pressing alto n�o cansa os jogadores?',
      opts: [
        { text: 'Exige preparo f�sico, que temos.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Precisamos gerenciar as for�as ao longo do jogo.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } },
        { text: 'O benef�cio supera o custo f�sico.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'Como voc� organiza a marca��o?',
      opts: [
        { text: 'Por zonas, � mais coletivo.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Mista, adapto conforme o advers�rio.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } },
        { text: 'Individual em momentos chave.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } }
      ]
    },
    {
      q: 'A substitui��o t�tica � uma arma?',
      opts: [
        { text: 'Sim, mudo o jogo durante a partida.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Depende do momento, posso mudar quando preciso.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'As substitui��es s�o planejadas, n�o improvisadas.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } }
      ]
    },
    {
      q: 'Como voc� treina o time para dominar a posse?',
      opts: [
        { text: 'Jogos de posse nos treinos, simula��o de cen�rios.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Treinos de passe e mobilidade.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Trabalho coletivo, todos participam da posse.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'O time � dependente de algum jogador taticamente?',
      opts: [
        { text: 'N�o, o sistema funciona independentemente.', effects: { morale: 4, fans: 2, board: 4, sponsors: 2 } },
        { text: 'Alguns jogadores s�o importantes, mas n�o insubstitu�veis.', effects: { morale: 3, fans: 1, board: 3, sponsors: 2 } },
        { text: 'Sempre trabalhei para n�o depender de um jogador.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'A defesa est� funcionando bem?',
      opts: [
        { text: 'Sim, estamos s�lidos e organizados.', effects: { morale: 4, fans: 3, board: 4, sponsors: 2 } },
        { text: 'Poderia ser melhor, mas melhorou muito.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } },
        { text: 'O time � mais que a defesa, � coletivo.', effects: { morale: 3, fans: 2, board: 2, sponsors: 2 } }
      ]
    },
    {
      q: 'Como voc� prepara o time para jogar fora de casa?',
      opts: [
        { text: 'Com a mesma mentalidade, jogar para vencer.', effects: { morale: 4, fans: 2, board: 3, sponsors: 2 } },
        { text: 'An�lise do advers�rio e adapta��es pontuais.', effects: { morale: 3, fans: 1, board: 3, sponsors: 1 } },
        { text: 'Mantendo nossa identidade de jogo.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'O time precisa de um camisa 10?',
      opts: [
        { text: 'N�o, o sistema � coletivo.', effects: { morale: 4, fans: 1, board: 4, sponsors: 2 } },
        { text: 'Sempre � bom ter um criador de jogadas.', effects: { morale: 3, fans: 2, board: 2, sponsors: 2 } },
        { text: 'A criatividade vem de v�rios jogadores.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'Como voc� v� o posicionamento dos zagueiros?',
      opts: [
        { text: 'S�lidos, d�o seguran�a ao time.', effects: { morale: 4, fans: 3, board: 4, sponsors: 2 } },
        { text: 'Melhoraram, mas podem evoluir.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Os zagueiros s�o importantes, mas o time defende junto.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'A t�tica pode evoluir durante a temporada?',
      opts: [
        { text: 'Sim, sempre busco melhorias e ajustes.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'O b�sico funciona, pequenas adapta��es s�o feitas.', effects: { morale: 3, fans: 1, board: 3, sponsors: 2 } },
        { text: 'O time evolui naturalmente, n�o preciso mudar tudo.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'Como voc� v� o posicionamento dos atacantes?',
      opts: [
        { text: 'Funcional, os gols est�o chegando.', effects: { morale: 4, fans: 3, board: 3, sponsors: 3 } },
        { text: 'Poderia ser mais eficiente, mas o trabalho � bom.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } },
        { text: 'O ataque � coletivo, todos contribuem.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'A organiza��o do time � sua marca?',
      opts: [
        { text: 'Sim, � o que mais valorizo.', effects: { morale: 3, fans: 2, board: 4, sponsors: 2 } },
        { text: 'N�o s� organiza��o, mas identidade de jogo.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: '� fundamental para qualquer time.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'O que voc� diria a um time que joga apenas retrancado?',
      opts: [
        { text: 'Cada time tem seu estilo, respeito.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Prefiro jogar ofensivamente, � mais gratificante.', effects: { morale: 3, fans: 3, board: 1, sponsors: 2 } },
        { text: 'O futebol � diverso, todas as t�ticas s�o v�lidas.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'Como voc� prepara os laterais para apoiar o ataque?',
      opts: [
        { text: 'Treinos de sobreposi��o e cruzamento.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Trabalho t�tico, timing de subida e descida.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: '� parte do modelo de jogo, todos sabem o papel.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    }
  ],

  player: [
    {
      q: 'Como voc� avalia o desempenho do jogador X?',
      opts: [
        { text: 'Excelente, fez a diferen�a no jogo.', effects: { morale: 4, fans: 3, board: 3, sponsors: 3 } },
        { text: 'Bom trabalho, contribuiu para a vit�ria.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Poderia ser melhor, mas ajudou o time.', effects: { morale: 2, fans: 1, board: 2, sponsors: 1 } }
      ]
    },
    {
      q: 'O jogador X est� em m� forma. O que aconteceu?',
      opts: [
        { text: 'Todo passa por fases, estou confiante que vai resolver.', effects: { morale: 4, fans: 2, board: 3, sponsors: 2 } },
        { text: 'O time depende menos dele agora.', effects: { morale: 1, fans: -2, board: 2, sponsors: 1 } },
        { text: 'Estamos trabalhando para ele recuperar o n�vel.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'O jogador X tem condi��o f�sica para jogar?',
      opts: [
        { text: 'Sim, est� 100% preparado.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Estamos acompanhando, � uma decis�o m�dica.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } },
        { text: 'Depende do jogo, avaliarei na semana.', effects: { morale: 2, fans: 1, board: 2, sponsors: 1 } }
      ]
    },
    {
      q: 'O jogador X foi disciplinado. Como reage?',
      opts: [
        { text: 'Quest�es internas ficam no clube.', effects: { morale: 2, fans: 1, board: 3, sponsors: 2 } },
        { text: 'Jogador profissional, vai resolver.', effects: { morale: 3, fans: 1, board: 3, sponsors: 2 } },
        { text: 'Cada situa��o � avaliada individualmente.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } }
      ]
    },
    {
      q: 'H� interessados no jogador X. Ficar�?',
      opts: [
        { text: '� jogador do clube, foco nele aqui.', effects: { morale: 3, fans: 2, board: 4, sponsors: 2 } },
        { text: 'Qualquer oferta ser� avaliada pela diretoria.', effects: { morale: 2, fans: 1, board: 3, sponsors: 2 } },
        { text: 'Quero que fique, � importante para o time.', effects: { morale: 4, fans: 3, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'Como voc� desenvolve os jogadores jovens?',
      opts: [
        { text: 'Dando oportunidades e confian�a em campo.', effects: { morale: 4, fans: 3, board: 3, sponsors: 2 } },
        { text: 'Trabalho individualizado e integra��o ao elenco.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Eles aprendem com os veteranos e no treinamento.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'O jogador X � o l�der do time?',
      opts: [
        { text: 'Sim, � refer�ncia dentro e fora de campo.', effects: { morale: 4, fans: 3, board: 4, sponsors: 3 } },
        { text: 'Todos s�o l�deres de alguma forma.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'O liderado � coletivo, n�o depende de um.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'Como voc� usa o jogador X taticamente?',
      opts: [
        { text: '� fundamental no nosso sistema.', effects: { morale: 4, fans: 3, board: 3, sponsors: 2 } },
        { text: 'Adapto conforme o advers�rio.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Tem liberdade para criar, � seu diferencial.', effects: { morale: 4, fans: 3, board: 2, sponsors: 2 } }
      ]
    },
    {
      q: 'A renova��o do jogador X � prioridade?',
      opts: [
        { text: 'Sim, � um jogador importante para o projeto.', effects: { morale: 4, fans: 3, board: 4, sponsors: 3 } },
        { text: 'Estamos em negocia��o, espero que resolva.', effects: { morale: 2, fans: 1, board: 3, sponsors: 2 } },
        { text: 'O clube avalia todos os casos individualmente.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } }
      ]
    },
    {
      q: 'O jogador X pode ser capit�o?',
      opts: [
        { text: 'Sim, tem qualidades de lideran�a.', effects: { morale: 4, fans: 3, board: 3, sponsors: 2 } },
        { text: 'J� � um l�der natural do grupo.', effects: { morale: 4, fans: 3, board: 4, sponsors: 3 } },
        { text: 'O ?????�o � escolhido pelo grupo.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'Como voc� lida com jogadores indisciplinados?',
      opts: [
        { text: 'Com justi�a, todos s�o tratados iguais.', effects: { morale: 3, fans: 2, board: 4, sponsors: 2 } },
        { text: 'Conversa direta e puni��o quando necess�rio.', effects: { morale: 2, fans: 1, board: 4, sponsors: 1 } },
        { text: 'Dentro do clube, n�o comento situa��es internas.', effects: { morale: 2, fans: 1, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'O jogador X est� fazendo falta ao time?',
      opts: [
        { text: 'Sim, � um jogador importante.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'O time se adapta, ningu�m � insubstitu�vel.', effects: { morale: 3, fans: 1, board: 4, sponsors: 2 } },
        { text: 'Faz, mas temos op��es no elenco.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } }
      ]
    },
    {
      q: 'Como voc� motiva um jogador que est� fora do time?',
      opts: [
        { text: 'Conversa individual e oportunidades nos treinos.', effects: { morale: 4, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Mostro que ele � importante para o projeto.', effects: { morale: 4, fans: 2, board: 3, sponsors: 2 } },
        { text: 'A concorr�ncia � saud�vel, trabalha mais.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } }
      ]
    },
    {
      q: 'O jogador X � importante para o sistema t�tico?',
      opts: [
        { text: 'Sim, fundamental no nosso modelo de jogo.', effects: { morale: 4, fans: 3, board: 3, sponsors: 2 } },
        { text: 'Contribui, mas o time funciona sem ele.', effects: { morale: 3, fans: 1, board: 3, sponsors: 2 } },
        { text: '� um jogador-chave, n�o posso dispensar.', effects: { morale: 4, fans: 3, board: 4, sponsors: 3 } }
      ]
    },
    {
      q: 'Como voc� avalia o trabalho individual nos treinos?',
      opts: [
        { text: 'Excelente, os jogadores evoluem constantemente.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Bom, mas sempre h� espa�o para melhorar.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'O trabalho coletivo � prioridade.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'O jogador X est� no auge da carreira?',
      opts: [
        { text: 'Sim, est� jogando no seu melhor n�vel.', effects: { morale: 4, fans: 3, board: 3, sponsors: 3 } },
        { text: 'Pode evoluir mais, tem potencial.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'O futebol n�o para, sempre pode melhorar.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'Como voc� gerencia o elenco?',
      opts: [
        { text: 'Com transpar�ncia e respeito.', effects: { morale: 4, fans: 3, board: 3, sponsors: 2 } },
        { text: 'Comunica��o aberta e justi�a.', effects: { morale: 4, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Cada jogador tem um papel, todos s�o importantes.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'O jogador X pode ser vendido?',
      opts: [
        { text: 'N�o quero perder, � importante.', effects: { morale: 4, fans: 3, board: 3, sponsors: 2 } },
        { text: 'Qualquer decis�o ser� tomada pela diretoria.', effects: { morale: 2, fans: 1, board: 4, sponsors: 2 } },
        { text: 'Focado no que temos agora, n�o especulo.', effects: { morale: 3, fans: 2, board: 3, sponsors: 1 } }
      ]
    },
    {
      q: 'Como voc� avalia a recupera��o f�sica dos jogadores?',
      opts: [
        { text: 'Estamos no controle, elenco saud�vel.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Alguns jogadores precisam de cuidados, mas est� bom.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } },
        { text: 'O departamento m�dico trabalha muito bem.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'O jogador X � uma aposta para o futuro?',
      opts: [
        { text: 'Sim, tem muito potencial.', effects: { morale: 4, fans: 3, board: 3, sponsors: 2 } },
        { text: 'Precisa de tempo e oportunidades.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Acredito nele, vai crescer no clube.', effects: { morale: 4, fans: 3, board: 3, sponsors: 3 } }
      ]
    },
    {
      q: 'Como voc� v� a competi��o interna no elenco?',
      opts: [
        { text: 'Saud�vel, todos querem jogar.', effects: { morale: 4, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Importante, mant�m os jogadores alerta.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: '� um sinal de elenco forte.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'O jogador X precisa de mais gols?',
      opts: [
        { text: 'Sim, � sua fun��o e precisa entregar.', effects: { morale: 2, fans: 2, board: 3, sponsors: 2 } },
        { text: 'N�o, o trabalho dele vai al�m dos gols.', effects: { morale: 4, fans: 1, board: 3, sponsors: 2 } },
        { text: 'Os gols v�o chegar, confio nele.', effects: { morale: 4, fans: 2, board: 2, sponsors: 2 } }
      ]
    },
    {
      q: 'Como voc� avalia a atua��o do goleiro?',
      opts: [
        { text: 'S�lida, d� seguran�a ao time.', effects: { morale: 4, fans: 3, board: 4, sponsors: 2 } },
        { text: 'Bom trabalho, mas pode melhorar.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Importante para o sistema defensivo.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'O jogador X � um exemplo para os mais novos?',
      opts: [
        { text: 'Sim, dentro e fora de campo.', effects: { morale: 4, fans: 3, board: 4, sponsors: 3 } },
        { text: '� um profissional, todos podem aprender.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Tem responsabilidade sim, � refer�ncia.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'Como voc� avalia a integra��o dos refor�os?',
      opts: [
        { text: 'Muito boa, adaptaram-se rapidamente.', effects: { morale: 4, fans: 3, board: 3, sponsors: 2 } },
        { text: 'Bom processo, ainda se adaptando.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Time abra�a novos jogadores, integra��o natural.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    }
  ],

  transfers: [
    {
      q: 'H� negocia��es em andamento?',
      opts: [
        { text: 'N�o posso comentar sobre negocia��es.', effects: { morale: 2, fans: 1, board: 4, sponsors: 2 } },
        { text: 'Estamos trabalhando, mas nada concreto.', effects: { morale: 2, fans: 2, board: 3, sponsors: 1 } },
        { text: 'A diretoria cuida disso, foco no time.', effects: { morale: 3, fans: 1, board: 3, sponsors: 1 } }
      ]
    },
    {
      q: 'O que voc� precisa para refor�ar o elenco?',
      opts: [
        { text: 'Um meio-campista criativo seria importante.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'O elenco est� completo, mas sempre h� espa�o para melhorar.', effects: { morale: 4, fans: 1, board: 3, sponsors: 2 } },
        { text: 'Depende das oportunidades do mercado.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } }
      ]
    },
    {
      q: 'Os jogadores da base podem subir?',
      opts: [
        { text: 'Sim, sempre dou oportunidades aos jovens.', effects: { morale: 4, fans: 3, board: 3, sponsors: 2 } },
        { text: 'Quando estiverem prontos, ter�o sua chance.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'A base � importante para o futuro do clube.', effects: { morale: 3, fans: 2, board: 4, sponsors: 2 } }
      ]
    },
    {
      q: 'As renova��es de contrato s�o prioridade?',
      opts: [
        { text: 'Sim, manter o elenco � fundamental.', effects: { morale: 4, fans: 3, board: 4, sponsors: 3 } },
        { text: 'A diretoria cuida disso, sempre estamos negociando.', effects: { morale: 2, fans: 1, board: 3, sponsors: 2 } },
        { text: 'O clube avalia cada caso individualmente.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } }
      ]
    },
    {
      q: 'O or�amento para transfer�ncias � suficiente?',
      opts: [
        { text: 'Sim, trabalhamos com o que temos.', effects: { morale: 3, fans: 1, board: 4, sponsors: 2 } },
        { text: 'Sempre podemos ter mais, mas � administr�vel.', effects: { morale: 2, fans: 2, board: 3, sponsors: 1 } },
        { text: 'A diretoria faz o poss�vel dentro das condi��es.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } }
      ]
    },
    {
      q: 'Como voc� avalia os scouts do clube?',
      opts: [
        { text: 'Excelente trabalho, trazem boas op��es.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Bom trabalho, sempre identificam talentos.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Trabalho importante para o futuro do clube.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'Os agentes est�o oferecendo jogadores?',
      opts: [
        { text: 'Sempre h� ofertas, avaliamos cada uma.', effects: { morale: 2, fans: 1, board: 3, sponsors: 2 } },
        { text: 'N�o posso comentar, mas estamos atentos.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } },
        { text: 'O mercado � din�mico, coisas aparecem.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } }
      ]
    },
    {
      q: 'Voc� quer trazer empr�stimos?',
      opts: [
        { text: 'Sim, podem ser boas op��es.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Depende do jogador e da situa��o.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } },
        { text: 'N�o descarto, � uma ferramenta �til.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } }
      ]
    },
    {
      q: 'O que voc� diria a um jogador que quer sair?',
      opts: [
        { text: 'Que foque no trabalho, oportunidades vir�o.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Que o clube � mais importante que qualquer jogador.', effects: { morale: 2, fans: 3, board: 4, sponsors: 2 } },
        { text: 'Que respeito a decis�o, mas prefiro que fique.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'Os jovens jogadores t�m valor de mercado?',
      opts: [
        { text: 'Sim, s�o ativos importantes para o clube.', effects: { morale: 3, fans: 2, board: 4, sponsors: 2 } },
        { text: 'T�m potencial, mas precisam de tempo.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'O mercado valoriza jovens talentos.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'A janela de transfer�ncias est� sendo bem aproveitada?',
      opts: [
        { text: 'Sim, fizemos boas contrata��es.', effects: { morale: 4, fans: 3, board: 3, sponsors: 3 } },
        { text: 'Ainda n�o terminou, estamos trabalhando.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } },
        { text: 'Oportunidades podem aparecer at� o final.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } }
      ]
    },
    {
      q: 'Voc� prefere jogadores experientes ou jovens?',
      opts: [
        { text: 'Experi�ncia � importante, mas jovens trazem energia.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Depende do que o time precisa.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } },
        { text: 'Mix dos dois � o ideal.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'O clube pode perder jogadores importantes?',
      opts: [
        { text: 'N�o acredito, estamos protegidos.', effects: { morale: 4, fans: 2, board: 4, sponsors: 3 } },
        { text: 'Qualquer coisa pode acontecer no mercado.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } },
        { text: 'Focados em manter o melhor elenco poss�vel.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'Como voc� avalia a pol�tica de transfer�ncias do clube?',
      opts: [
        { text: 'Muito boa, trabalhamos com intelig�ncia.', effects: { morale: 3, fans: 2, board: 4, sponsors: 3 } },
        { text: 'Razo�vel, sempre pode melhorar.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } },
        { text: 'Depende dos resultados, o mercado � imprevis�vel.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } }
      ]
    },
    {
      q: 'Os empr�stimos com op��o de compra s�o uma boa?',
      opts: [
        { text: 'Sim, avaliamos antes de comprar.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Depende do jogador e do valor.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } },
        { text: 'S�o uma ferramenta inteligente no mercado.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'O que voc� busca em uma contrata��o?',
      opts: [
        { text: 'Qualidade t�cnica e mentalidade.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Jogador que se encaixe no sistema t�tico.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Car�ter e profissionalismo s�o essenciais.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'O mercado inflado prejudica o clube?',
      opts: [
        { text: 'Um pouco, mas trabalhamos dentro das possibilidades.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } },
        { text: 'Sim, � dif�cil competir com clubes maiores.', effects: { morale: 1, fans: 1, board: 3, sponsors: 1 } },
        { text: 'Encontramos alternativas inteligentes.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'Os jogadores da base s�o o futuro?',
      opts: [
        { text: 'Sim, investir na base � prioridade.', effects: { morale: 4, fans: 3, board: 4, sponsors: 2 } },
        { text: 'Sim, mas tamb�m precisamos de refor�os externos.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Base forte garante sustentabilidade.', effects: { morale: 3, fans: 2, board: 4, sponsors: 2 } }
      ]
    },
    {
      q: 'Como voc� lida com as especula��es da imprensa?',
      opts: [
        { text: 'N�o me abalo, foco no trabalho.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Faz parte do futebol moderno.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } },
        { text: 'N�o comento, trabalho em sil�ncio.', effects: { morale: 3, fans: 1, board: 4, sponsors: 2 } }
      ]
    },
    {
      q: 'O clube est� vendendo jogadores?',
      opts: [
        { text: 'N�o posso antecipar movimenta��es.', effects: { morale: 2, fans: 1, board: 3, sponsors: 2 } },
        { text: 'Cada caso � avaliado pela diretoria.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } },
        { text: 'Foco em manter o melhor elenco.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'As contratações de inverno são diferentes?',
      opts: [
        { text: 'Sim, mais difíceis, mas oportunidades surgem.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } },
        { text: 'O mercado é mais limitado, mas analisamos bem.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } },
        { text: 'Depende das necessidades do elenco.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } }
      ]
    },
    {
      q: 'Como você avalia o desempenho dos reforços?',
      opts: [
        { text: 'Muito bom, integraram-se rapidamente.', effects: { morale: 4, fans: 3, board: 3, sponsors: 3 } },
        { text: 'Bom trabalho, ainda se adaptando.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Tempo, eles precisam de tempo.', effects: { morale: 3, fans: 2, board: 2, sponsors: 2 } }
      ]
    },
    {
      q: 'O clube está atento ao mercado internacional?',
      opts: [
        { text: 'Sim, scouting global é uma prioridade.', effects: { morale: 3, fans: 2, board: 4, sponsors: 3 } },
        { text: 'Sempre analisamos oportunidades em todo o mundo.', effects: { morale: 3, fans: 2, board: 3, sponsors: 3 } },
        { text: 'O mercado internacional oferece boas opções.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'As vendas de jogadores são planejadas?',
      opts: [
        { text: 'Sim, tudo é avaliado com calma pela diretoria.', effects: { morale: 3, fans: 1, board: 4, sponsors: 3 } },
        { text: 'Cada venda é pensada no benefício do clube.', effects: { morale: 3, fans: 2, board: 4, sponsors: 3 } },
        { text: 'Oportunidades surgem e o clube decide.', effects: { morale: 2, fans: 1, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'O clube pode perder um jogador chave na janela?',
      opts: [
        { text: 'Não acredito, temos cláusulas de proteção.', effects: { morale: 4, fans: 3, board: 4, sponsors: 3 } },
        { text: 'Qualquer coisa pode acontecer, mas estamos preparados.', effects: { morale: 2, fans: 1, board: 3, sponsors: 2 } },
        { text: 'Focados em manter o elenco competitivo.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'O scouting brasileiro é bom?',
      opts: [
        { text: 'Sim, o Brasil sempre produziu grandes talentos.', effects: { morale: 3, fans: 3, board: 3, sponsors: 3 } },
        { text: 'Excelente, sempre temos opções boas.', effects: { morale: 3, fans: 3, board: 3, sponsors: 3 } },
        { text: 'O scouting nacional é fundamental para o clube.', effects: { morale: 3, fans: 3, board: 3, sponsors: 2 } }
      ]
    }
  ],

  board: [
    {
      q: 'Quais s�o os objetivos da temporada?',
      opts: [
        { text: 'Classifica��o para competi��es internacionais.', effects: { morale: 3, fans: 3, board: 4, sponsors: 3 } },
        { text: 'Melhorar o desempenho do ano anterior.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'O time precisa crescer, objetivo a cada jogo.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'O or�amento � suficiente para o que precisamos?',
      opts: [
        { text: 'Sim, trabalhamos dentro das possibilidades.', effects: { morale: 3, fans: 1, board: 4, sponsors: 2 } },
        { text: 'Poderia ser maior, mas administr�vel.', effects: { morale: 2, fans: 2, board: 3, sponsors: 1 } },
        { text: 'A diretoria faz o poss�vel, estou satisfeito.', effects: { morale: 3, fans: 1, board: 4, sponsors: 2 } }
      ]
    },
    {
      q: 'As infraestruturas do clube est�o adequadas?',
      opts: [
        { text: 'Sim, temos excelentes condi��es de trabalho.', effects: { morale: 4, fans: 2, board: 4, sponsors: 3 } },
        { text: 'Podem melhorar, mas funcionam.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'A diretoria est� investindo em melhorias.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'Como voc� v� o projeto do clube?',
      opts: [
        { text: 'Muito positivo, estou alinhado com a vis�o.', effects: { morale: 4, fans: 3, board: 5, sponsors: 3 } },
        { text: 'Bom projeto, preciso de tempo para mostrar resultados.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'O projeto � s�rio, acredito no trabalho.', effects: { morale: 3, fans: 2, board: 4, sponsors: 2 } }
      ]
    },
    {
      q: 'O crescimento comercial � importante?',
      opts: [
        { text: 'Sim, � fundamental para o crescimento do clube.', effects: { morale: 2, fans: -1, board: 4, sponsors: 5 } },
        { text: 'Importante, mas o futebol vem primeiro.', effects: { morale: 3, fans: 3, board: 2, sponsors: 1 } },
        { text: 'Equil�brio entre comercial e esportivo.', effects: { morale: 3, fans: 2, board: 3, sponsors: 3 } }
      ]
    },
    {
      q: 'A base do clube � uma prioridade?',
      opts: [
        { text: 'Sim, investir no futuro � essencial.', effects: { morale: 4, fans: 3, board: 4, sponsors: 2 } },
        { text: 'Importante, mas precisamos de resultados imediatos.', effects: { morale: 2, fans: 1, board: 3, sponsors: 2 } },
        { text: 'A base � o cora��o do clube.', effects: { morale: 4, fans: 3, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'H� investimento em tecnologia?',
      opts: [
        { text: 'Sim, usamos dados e an�lise para decis�es.', effects: { morale: 3, fans: 2, board: 4, sponsors: 3 } },
        { text: 'Estamos evoluindo nesse aspecto.', effects: { morale: 2, fans: 1, board: 3, sponsors: 2 } },
        { text: '� importante, mas n�o � o �nico fator.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'A press�o da diretoria afeta seu trabalho?',
      opts: [
        { text: 'N�o, estamos alinhados nos objetivos.', effects: { morale: 4, fans: 2, board: 5, sponsors: 3 } },
        { text: 'Um pouco, mas � normal na profiss�o.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } },
        { text: 'A press�o � motivadora, n�o prejudicial.', effects: { morale: 3, fans: 2, board: 4, sponsors: 2 } }
      ]
    },
    {
      q: 'O que voc� espera da diretoria?',
      opts: [
        { text: 'Confian�a e trabalho em conjunto.', effects: { morale: 4, fans: 2, board: 4, sponsors: 3 } },
        { text: 'Apoio nas decis�es esportivas.', effects: { morale: 3, fans: 2, board: 4, sponsors: 2 } },
        { text: 'Profissionalismo e respeito.', effects: { morale: 3, fans: 2, board: 4, sponsors: 2 } }
      ]
    },
    {
      q: 'A comunica��o com a diretoria � boa?',
      opts: [
        { text: 'Excelente, estamos sempre em contato.', effects: { morale: 4, fans: 2, board: 5, sponsors: 3 } },
        { text: 'Boa, trabalhamos em harmonia.', effects: { morale: 3, fans: 2, board: 4, sponsors: 2 } },
        { text: 'Sempre h� espa�o para melhorar.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'O clube est� crescendo institucionalmente?',
      opts: [
        { text: 'Sim, em v�rios aspectos.', effects: { morale: 3, fans: 3, board: 4, sponsors: 4 } },
        { text: 'Ainda h� muito o que fazer.', effects: { morale: 2, fans: 1, board: 3, sponsors: 2 } },
        { text: 'O trabalho coletivo traz crescimento.', effects: { morale: 3, fans: 2, board: 3, sponsors: 3 } }
      ]
    },
    {
      q: 'Os investidores est�o satisfeitos?',
      opts: [
        { text: 'Sim, est�o confiantes no projeto.', effects: { morale: 3, fans: 2, board: 4, sponsors: 4 } },
        { text: 'Espero que sim, trabalhamos para isso.', effects: { morale: 3, fans: 2, board: 3, sponsors: 3 } },
        { text: 'Os resultados em campo mostram o trabalho.', effects: { morale: 3, fans: 2, board: 3, sponsors: 3 } }
      ]
    },
    {
      q: 'A estabilidade do clube � garantida?',
      opts: [
        { text: 'Sim, trabalhamos com gest�o profissional.', effects: { morale: 4, fans: 3, board: 4, sponsors: 4 } },
        { text: 'N�o posso garantir nada, mas estamos bem.', effects: { morale: 2, fans: 1, board: 3, sponsors: 2 } },
        { text: 'O clube � maior que qualquer crise.', effects: { morale: 3, fans: 3, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'O que o clube precisa para crescer?',
      opts: [
        { text: 'Continuidade no trabalho e paci�ncia.', effects: { morale: 4, fans: 2, board: 4, sponsors: 3 } },
        { text: 'Investimento e tempo.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Resultados positivos em campo.', effects: { morale: 3, fans: 3, board: 3, sponsors: 3 } }
      ]
    },
    {
      q: 'As decis�es da diretoria s�o acertadas?',
      opts: [
        { text: 'Sim, confio no trabalho deles.', effects: { morale: 4, fans: 2, board: 5, sponsors: 3 } },
        { text: 'Na maioria das vezes, sim.', effects: { morale: 3, fans: 2, board: 4, sponsors: 2 } },
        { text: 'Ningu�m � perfeito, mas trabalhamos juntos.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'O planejamento a longo prazo existe?',
      opts: [
        { text: 'Sim, h� um projeto claro.', effects: { morale: 4, fans: 3, board: 5, sponsors: 3 } },
        { text: 'Sim, trabalhamos com vis�o de futuro.', effects: { morale: 4, fans: 3, board: 4, sponsors: 3 } },
        { text: 'Cada etapa � planejada com cuidado.', effects: { morale: 3, fans: 2, board: 4, sponsors: 2 } }
      ]
    },
    {
      q: 'A sustentabilidade financeira � uma meta?',
      opts: [
        { text: 'Sim, trabalhamos para ser sustent�veis.', effects: { morale: 3, fans: 2, board: 4, sponsors: 4 } },
        { text: 'Importante, mas resultados esportivos s�o prioridade.', effects: { morale: 3, fans: 3, board: 2, sponsors: 2 } },
        { text: 'Equil�brio entre finan�as e futebol.', effects: { morale: 3, fans: 2, board: 3, sponsors: 3 } }
      ]
    },
    {
      q: 'O que diferencia este clube dos outros?',
      opts: [
        { text: 'A hist�ria e a paix�o da torcida.', effects: { morale: 3, fans: 5, board: 3, sponsors: 3 } },
        { text: 'O projeto s�rio e profissional.', effects: { morale: 3, fans: 2, board: 4, sponsors: 3 } },
        { text: 'A uni�o entre torcida, jogadores e diretoria.', effects: { morale: 4, fans: 4, board: 4, sponsors: 3 } }
      ]
    },
    {
      q: 'A diretoria apoia suas decis�es?',
      opts: [
        { text: 'Sim, sempre tive respaldo.', effects: { morale: 4, fans: 2, board: 5, sponsors: 3 } },
        { text: 'Na maioria das vezes, sim.', effects: { morale: 3, fans: 2, board: 4, sponsors: 2 } },
        { text: 'Trabalhamos em conjunto, � uma parceria.', effects: { morale: 3, fans: 2, board: 4, sponsors: 2 } }
      ]
    },
    {
      q: 'Há planos de expansão do clube?',
      opts: [
        { text: 'Sim, crescimento em várias áreas.', effects: { morale: 3, fans: 3, board: 4, sponsors: 4 } },
        { text: 'Estamos avaliando oportunidades.', effects: { morale: 2, fans: 1, board: 3, sponsors: 2 } },
        { text: 'O crescimento é contínuo.', effects: { morale: 3, fans: 2, board: 3, sponsors: 3 } }
      ]
    },
    {
      q: 'A transparência da diretoria é uma prioridade?',
      opts: [
        { text: 'Sim, comunicação aberta com todos.', effects: { morale: 4, fans: 3, board: 5, sponsors: 3 } },
        { text: 'Importante para manter a confiança.', effects: { morale: 3, fans: 2, board: 4, sponsors: 2 } },
        { text: 'Trabalhamos com honestidade e ética.', effects: { morale: 3, fans: 3, board: 4, sponsors: 3 } }
      ]
    },
    {
      q: 'O clube investe em sustentabilidade?',
      opts: [
        { text: 'Sim, é uma prioridade institucional.', effects: { morale: 3, fans: 3, board: 4, sponsors: 4 } },
        { text: 'Estamos implementando práticas sustentáveis.', effects: { morale: 3, fans: 3, board: 3, sponsors: 3 } },
        { text: 'A sustentabilidade é parte do projeto.', effects: { morale: 3, fans: 3, board: 4, sponsors: 4 } }
      ]
    },
    {
      q: 'A diretoria apoia investimentos em tecnologia?',
      opts: [
        { text: 'Sim, é essencial para o crescimento.', effects: { morale: 3, fans: 2, board: 5, sponsors: 3 } },
        { text: 'Estamos evoluindo nessa área.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Tecnologia melhora a gestão do clube.', effects: { morale: 3, fans: 2, board: 4, sponsors: 3 } }
      ]
    },
    {
      q: 'O projeto do clube é ambicioso?',
      opts: [
        { text: 'Sim, temos grandes objetivos.', effects: { morale: 4, fans: 3, board: 5, sponsors: 4 } },
        { text: 'Ambição é o que nos move.', effects: { morale: 4, fans: 3, board: 4, sponsors: 3 } },
        { text: 'O clube merece sempre o melhor.', effects: { morale: 4, fans: 3, board: 4, sponsors: 4 } }
      ]
    }
  ],

  fans: [
    {
      q: 'O que voc� tem a dizer para a torcida?',
      opts: [
        { text: 'Obrigado pelo apoio incans�vel, jogamos para voc�s.', effects: { morale: 3, fans: 5, board: 2, sponsors: 3 } },
        { text: 'Pe�o paci�ncia, estamos trabalhando para melhorar.', effects: { morale: 3, fans: 3, board: 2, sponsors: 2 } },
        { text: 'A torcida � fundamental, sem ela n�o somos nada.', effects: { morale: 4, fans: 5, board: 2, sponsors: 3 } }
      ]
    },
    {
      q: 'Os torcedores est�o frustrados. Como reage?',
      opts: [
        { text: 'Entendo a frustra��o, compartilho da mesma dor.', effects: { morale: 2, fans: 3, board: 2, sponsors: 1 } },
        { text: 'A torcida tem raz�o em cobrar, prometemos reagir.', effects: { morale: 2, fans: 4, board: 1, sponsors: 1 } },
        { text: 'Precisamos do apoio deles agora mais que nunca.', effects: { morale: 3, fans: 3, board: 2, sponsors: 1 } }
      ]
    },
    {
      q: 'Como voc� descreve o relacionamento com a torcida?',
      opts: [
        { text: 'Excelente, temos uma conex�o especial.', effects: { morale: 4, fans: 5, board: 3, sponsors: 3 } },
        { text: 'Bom, trabalhamos para reconquistar a confian�a.', effects: { morale: 3, fans: 3, board: 2, sponsors: 2 } },
        { text: 'Respeito m�tuo, sempre foi assim.', effects: { morale: 3, fans: 4, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'A experi�ncia no est�dio � importante?',
      opts: [
        { text: 'Sim, a atmosfera faz diferen�a no jogo.', effects: { morale: 4, fans: 5, board: 2, sponsors: 4 } },
        { text: 'Fundamental, � onde o time se fortalece.', effects: { morale: 3, fans: 4, board: 3, sponsors: 3 } },
        { text: 'O est�dio � a casa do torcedor.', effects: { morale: 4, fans: 5, board: 2, sponsors: 3 } }
      ]
    },
    {
      q: 'A lealdade da torcida � incondicional?',
      opts: [
        { text: 'Sim, isso � o que mais valorizo.', effects: { morale: 4, fans: 5, board: 2, sponsors: 3 } },
        { text: 'Espero que sim, trabalhamos para merecer.', effects: { morale: 3, fans: 4, board: 2, sponsors: 2 } },
        { text: 'A torcida � a alma do clube.', effects: { morale: 4, fans: 5, board: 2, sponsors: 3 } }
      ]
    },
    {
      q: 'As expectativas da torcida s�o altas?',
      opts: [
        { text: 'Sim, e � bom assim, nos motiva.', effects: { morale: 4, fans: 4, board: 3, sponsors: 3 } },
        { text: 'Alt�ssimas, trabalhamos para superar.', effects: { morale: 3, fans: 3, board: 3, sponsors: 2 } },
        { text: 'A torcida merece sempre o melhor.', effects: { morale: 4, fans: 5, board: 2, sponsors: 3 } }
      ]
    },
    {
      q: 'Como voc� comunica com os torcedores?',
      opts: [
        { text: 'Atrav�s do trabalho em campo, que � o mais importante.', effects: { morale: 3, fans: 3, board: 3, sponsors: 2 } },
        { text: 'Respeito e transpar�ncia.', effects: { morale: 3, fans: 4, board: 3, sponsors: 2 } },
        { text: 'Sempre com honestidade.', effects: { morale: 3, fans: 4, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'O apoio da torcida fora de casa � not�vel. Comenta?',
      opts: [
        { text: 'Incr�vel, viajar com a torcida nos fortalece.', effects: { morale: 4, fans: 5, board: 2, sponsors: 3 } },
        { text: 'Mostra a paix�o e lealdade da torcida.', effects: { morale: 4, fans: 5, board: 2, sponsors: 3 } },
        { text: '� um diferencial enorme ter esse apoio.', effects: { morale: 4, fans: 5, board: 2, sponsors: 3 } }
      ]
    },
    {
      q: 'Como voc� v� os protestos dos torcedores?',
      opts: [
        { text: 'Entendo, � direito deles se manifestar.', effects: { morale: 2, fans: 4, board: 2, sponsors: 1 } },
        { text: 'Respeito, mas prefiro resposta em campo.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'A torcida tem voz, soube ouvir.', effects: { morale: 2, fans: 4, board: 2, sponsors: 1 } }
      ]
    },
    {
      q: 'O que a torcida espera do time?',
      opts: [
        { text: 'Dedica��o e resultados positivos.', effects: { morale: 3, fans: 4, board: 3, sponsors: 2 } },
        { text: 'Atitude e comprometimento em campo.', effects: { morale: 3, fans: 4, board: 3, sponsors: 2 } },
        { text: 'Lutar por cada bola, como eles fazem.', effects: { morale: 4, fans: 5, board: 2, sponsors: 3 } }
      ]
    },
    {
      q: 'Como voc� lida com a press�o da torcida?',
      opts: [
        { text: 'Usa isso como combust�vel, � motivador.', effects: { morale: 4, fans: 4, board: 3, sponsors: 2 } },
        { text: 'Respeito a press�o, faz parte do cargo.', effects: { morale: 3, fans: 3, board: 3, sponsors: 2 } },
        { text: 'A press�o � um privil�gio, mostra que importamos.', effects: { morale: 4, fans: 4, board: 3, sponsors: 3 } }
      ]
    },
    {
      q: 'A torcida pode influenciar resultados?',
      opts: [
        { text: 'Sim, a d�cima segunda jogadora.', effects: { morale: 4, fans: 5, board: 2, sponsors: 3 } },
        { text: 'Influencia, mas o time precisa entregar.', effects: { morale: 3, fans: 3, board: 3, sponsors: 2 } },
        { text: 'O apoio faz diferen�a, � comprovado.', effects: { morale: 4, fans: 5, board: 2, sponsors: 3 } }
      ]
    },
    {
      q: 'Como voc� descreve a paix�o da torcida?',
      opts: [
        { text: 'Incompar�vel, � o que move o clube.', effects: { morale: 4, fans: 5, board: 2, sponsors: 3 } },
        { text: 'Emocionante, d� orgulho fazer parte.', effects: { morale: 4, fans: 5, board: 3, sponsors: 3 } },
        { text: '� o que diferencia este clube.', effects: { morale: 4, fans: 5, board: 2, sponsors: 3 } }
      ]
    },
    {
      q: 'O que voc� faria para melhorar a experi�ncia dos torcedores?',
      opts: [
        { text: 'Vit�rias em campo, isso � o que mais importa.', effects: { morale: 3, fans: 4, board: 3, sponsors: 3 } },
        { text: 'Mais intera��o e proximidade.', effects: { morale: 3, fans: 5, board: 2, sponsors: 2 } },
        { text: 'Torneios e t�tulos para celebrar juntos.', effects: { morale: 4, fans: 5, board: 2, sponsors: 3 } }
      ]
    },
    {
      q: 'A torcida � um ativo do clube?',
      opts: [
        { text: 'Sim, o ativo mais valioso.', effects: { morale: 4, fans: 5, board: 3, sponsors: 3 } },
        { text: 'Sem d�vida, sem torcida n�o h� clube.', effects: { morale: 4, fans: 5, board: 3, sponsors: 3 } },
        { text: '� o sangue que mant�m o clube vivo.', effects: { morale: 4, fans: 5, board: 2, sponsors: 3 } }
      ]
    },
    {
      q: 'Como voc� reagiria se a torcida protestasse contra voc�?',
      opts: [
        { text: 'Respeitaria e trabalharia para reconquistar.', effects: { morale: 3, fans: 4, board: 3, sponsors: 2 } },
        { text: 'Entenderia, � direito deles.', effects: { morale: 2, fans: 4, board: 2, sponsors: 1 } },
        { text: 'Provaria em campo que estou no caminho certo.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'A torcida pode mudar decis�es do clube?',
      opts: [
        { text: 'N�o diretamente, mas sua voz � ouvida.', effects: { morale: 3, fans: 3, board: 3, sponsors: 2 } },
        { text: 'A opini�o p�blica importa, sim.', effects: { morale: 3, fans: 4, board: 2, sponsors: 2 } },
        { text: 'O clube ouve a torcida, � parte do processo.', effects: { morale: 3, fans: 4, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'O que voc� mais valoriza na torcida?',
      opts: [
        { text: 'A lealdade em todos os momentos.', effects: { morale: 4, fans: 5, board: 3, sponsors: 3 } },
        { text: 'A paix�o que trazem para cada jogo.', effects: { morale: 4, fans: 5, board: 2, sponsors: 3 } },
        { text: 'O apoio incondicional, vit�ria ou derrota.', effects: { morale: 4, fans: 5, board: 3, sponsors: 3 } }
      ]
    },
    {
      q: 'Como voc� descreveria o torcedor m�dio?',
      opts: [
        { text: 'Passional, dedicado e exigente.', effects: { morale: 3, fans: 4, board: 3, sponsors: 3 } },
        { text: 'Fiel ao clube, sempre presente.', effects: { morale: 4, fans: 5, board: 2, sponsors: 3 } },
        { text: 'O torcedor � a raz�o de existir do clube.', effects: { morale: 4, fans: 5, board: 2, sponsors: 3 } }
      ]
    },
    {
      q: 'A rivalidade com outro clube mobiliza a torcida?',
      opts: [
        { text: 'Sim, � um jogo que a torcida mais espera.', effects: { morale: 4, fans: 5, board: 3, sponsors: 4 } },
        { text: 'Muito, a atmosfera � incr�vel.', effects: { morale: 4, fans: 5, board: 3, sponsors: 4 } },
        { text: 'A rivalidade faz parte da hist�ria do clube.', effects: { morale: 3, fans: 5, board: 3, sponsors: 3 } }
      ]
    },
    {
      q: 'A torcida pode criar press�o desnecess�ria?',
      opts: [
        { text: '�s vezes, mas � bom ter expectativas.', effects: { morale: 3, fans: 3, board: 3, sponsors: 2 } },
        { text: 'N�o, a press�o � motivadora.', effects: { morale: 4, fans: 4, board: 2, sponsors: 2 } },
        { text: 'A press�o faz parte, � normal.', effects: { morale: 3, fans: 3, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'Como voc�?? a torcida?',
      opts: [
        { text: 'Com vit�rias e dedica��o em campo.', effects: { morale: 3, fans: 4, board: 3, sponsors: 3 } },
        { text: 'Respeito e profissionalismo.', effects: { morale: 3, fans: 4, board: 3, sponsors: 2 } },
        { text: 'Dando o m�ximo em cada jogo.', effects: { morale: 4, fans: 5, board: 2, sponsors: 3 } }
      ]
    },
    {
      q: 'A torcida � um espelho do time?',
      opts: [
        { text: 'Sim, reflete a atitude em campo.', effects: { morale: 4, fans: 4, board: 3, sponsors: 3 } },
        { text: 'Em partes, a torcida tem sua personalidade.', effects: { morale: 3, fans: 3, board: 2, sponsors: 2 } },
        { text: 'O time e a torcida s�o um s�.', effects: { morale: 4, fans: 5, board: 2, sponsors: 3 } }
      ]
    },
    {
      q: 'O que voc� diria a um torcedor que desistiu?',
      opts: [
        { text: 'Volte, vamos reconquistar juntos.', effects: { morale: 3, fans: 5, board: 2, sponsors: 2 } },
        { text: 'O clube precisa de voc�, n�o desista.', effects: { morale: 3, fans: 4, board: 2, sponsors: 2 } },
        { text: 'Tenha f�, os melhores momentos vir�o.', effects: { morale: 4, fans: 4, board: 2, sponsors: 2 } }
      ]
    },
    {
      q: 'Como voc� v� o futuro da torcida?',
      opts: [
        { text: 'Brilhante, a paix�o n�o diminui.', effects: { morale: 4, fans: 5, board: 3, sponsors: 3 } },
        { text: 'Crescente, novas gera��es est�o vindo.', effects: { morale: 4, fans: 4, board: 3, sponsors: 3 } },
        { text: 'Eterna, a torcida � imortal.', effects: { morale: 4, fans: 5, board: 2, sponsors: 3 } }
      ]
    }
  ],

  form: [
    {
      q: 'O time est� em boa forma. O que est� fazendo diferente?',
      opts: [
        { text: 'Trabalho consistente, confian�a no elenco.', effects: { morale: 4, fans: 3, board: 4, sponsors: 3 } },
        { text: 'Os jogadores est�o confiantes, o trabalho est� rendendo.', effects: { morale: 4, fans: 3, board: 3, sponsors: 2 } },
        { text: 'N�o mudou nada, continuamos trabalhando.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'A consist�ncia � um problema?',
      opts: [
        { text: 'Sim, precisamos manter o n�vel.', effects: { morale: 2, fans: 1, board: 3, sponsors: 1 } },
        { text: 'N�o, o time est� evoluindo.', effects: { morale: 4, fans: 3, board: 3, sponsors: 3 } },
        { text: 'Toda equipe tem altos e baixos.', effects: { morale: 2, fans: 1, board: 2, sponsors: 1 } }
      ]
    },
    {
      q: 'A sequ�ncia de vit�rias traz confian�a?',
      opts: [
        { text: 'Sim, os jogadores est�o mais confiantes.', effects: { morale: 5, fans: 4, board: 4, sponsors: 3 } },
        { text: 'Muito, a confian�a faz diferen�a em campo.', effects: { morale: 4, fans: 3, board: 3, sponsors: 3 } },
        { text: 'Confian�a � fundamental, mas n�o relaxamos.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'Quem s�o os respons�veis pela boa forma?',
      opts: [
        { text: 'Todo o grupo, � trabalho coletivo.', effects: { morale: 4, fans: 3, board: 3, sponsors: 2 } },
        { text: 'Os jogadores, deram a resposta que precisava.', effects: { morale: 4, fans: 3, board: 3, sponsors: 3 } },
        { text: 'O corpo t�cnico tamb�m contribuiu muito.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'A sequ�ncia de vit�rias pode criar complac�ncia?',
      opts: [
        { text: 'N�o, mantenho o time alerta.', effects: { morale: 3, fans: 2, board: 4, sponsors: 2 } },
        { text: 'Sim, � um risco, mas estamos preparados.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'A confian�a � boa, mas n�o descansamos.', effects: { morale: 4, fans: 3, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'O time est� jogando bem defensivamente?',
      opts: [
        { text: 'Sim, estamos s�lidos atr�s.', effects: { morale: 4, fans: 3, board: 4, sponsors: 3 } },
        { text: 'Melhorou muito, o trabalho est� dando frutos.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'O time defende junto, � coletivo.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'Os atacantes est�o fazendo gols?',
      opts: [
        { text: 'Sim, o ataque est� eficiente.', effects: { morale: 4, fans: 4, board: 3, sponsors: 3 } },
        { text: 'Est�o contribuindo, o time � coletivo.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Os gols s�o consequ�ncia do trabalho coletivo.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'A confian�a do goleiro est� em alta?',
      opts: [
        { text: 'Sim, est� fazendo defesas importantes.', effects: { morale: 4, fans: 3, board: 4, sponsors: 3 } },
        { text: 'Muito confiante, d� seguran�a ao time.', effects: { morale: 4, fans: 3, board: 4, sponsors: 3 } },
        { text: '� um goleiro seguro, sempre est� pronto.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'O meio-campo est� dominando os jogos?',
      opts: [
        { text: 'Sim, controlamos a maioria dos jogos.', effects: { morale: 4, fans: 3, board: 4, sponsors: 3 } },
        { text: 'Em muitos sim, mas depende do advers�rio.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'O meio-campo � o cora��o do time.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'A forma dos laterais � positiva?',
      opts: [
        { text: 'Sim, contribuem ofensiva e defensivamente.', effects: { morale: 4, fans: 3, board: 3, sponsors: 3 } },
        { text: 'Est�o jogando bem, parte do time.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Laterais s�o importantes no nosso sistema.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'O time est� fazendo viradas?',
      opts: [
        { text: 'Sim, mostramos character e garra.', effects: { morale: 5, fans: 4, board: 4, sponsors: 3 } },
        { text: 'Em alguns jogos, mostra a mentalidade do grupo.', effects: { morale: 4, fans: 3, board: 3, sponsors: 3 } },
        { text: 'Virar jogos � sinal de time forte.', effects: { morale: 4, fans: 4, board: 3, sponsors: 3 } }
      ]
    },
    {
      q: 'Os jogadores est�o em harmonia?',
      opts: [
        { text: 'Sim, o grupo est� muito unido.', effects: { morale: 5, fans: 3, board: 4, sponsors: 3 } },
        { text: 'A uni�o faz a diferen�a em campo.', effects: { morale: 4, fans: 3, board: 3, sponsors: 2 } },
        { text: 'O time � uma fam�lia, trabalham juntos.', effects: { morale: 4, fans: 3, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'A defesa est� fazendo jogos sem sofrer gols?',
      opts: [
        { text: 'Sim, o trabalho defensivo est� excelente.', effects: { morale: 4, fans: 3, board: 4, sponsors: 3 } },
        { text: 'Alguns sim, mostrando solidez.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'A solidez defensiva � nossa marca.', effects: { morale: 4, fans: 3, board: 4, sponsors: 3 } }
      ]
    },
    {
      q: 'O time est� marcando em jogadas de bola parada?',
      opts: [
        { text: 'Sim, treinamos bastante isso.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Em alguns jogos, o trabalho est� rendendo.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Bola parada � uma arma do time.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'A forma atual supera as expectativas?',
      opts: [
        { text: 'Sim, superou um pouco.', effects: { morale: 4, fans: 3, board: 3, sponsors: 3 } },
        { text: 'Est� no esperado, trabalhamos para isso.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Sempre espero o m�ximo, fico satisfeito.', effects: { morale: 4, fans: 3, board: 4, sponsors: 3 } }
      ]
    },
    {
      q: 'Os jogadores est�o satisfeitos com a forma?',
      opts: [
        { text: 'Sim, a confian�a � alta no vesti�rio.', effects: { morale: 5, fans: 3, board: 4, sponsors: 3 } },
        { text: 'Estamos trabalhando para manter o n�vel.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'A satisfa��o vem com os resultados.', effects: { morale: 4, fans: 3, board: 3, sponsors: 3 } }
      ]
    },
    {
      q: 'A press�o por manter a forma � grande?',
      opts: [
        { text: 'Sim, mas estamos preparados.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'A press�o � um privil�gio.', effects: { morale: 4, fans: 3, board: 3, sponsors: 3 } },
        { text: 'N�o � press�o, � motiva��o.', effects: { morale: 4, fans: 3, board: 3, sponsors: 3 } }
      ]
    },
    {
      q: 'A forma do time pode atrair investidores?',
      opts: [
        { text: 'Sim, resultados atraem oportunidades.', effects: { morale: 3, fans: 2, board: 4, sponsors: 4 } },
        { text: 'Sim, o trabalho est� sendo reconhecido.', effects: { morale: 3, fans: 2, board: 4, sponsors: 4 } },
        { text: 'O crescimento do clube � vis�vel.', effects: { morale: 3, fans: 3, board: 4, sponsors: 4 } }
      ]
    },
    {
      q: 'A sequ�ncia de bom desempenho � sustent�vel?',
      opts: [
        { text: 'Sim, o trabalho � cont�nuo.', effects: { morale: 4, fans: 3, board: 4, sponsors: 3 } },
        { text: 'Espero que sim, estamos trabalhando para isso.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'O time tem elenco para manter o n�vel.', effects: { morale: 4, fans: 3, board: 3, sponsors: 3 } }
      ]
    },
    {
      q: 'Como voc� avalia a evolu��o do time?',
      opts: [
        { text: 'Muito positiva, cresceu bastante.', effects: { morale: 4, fans: 3, board: 4, sponsors: 3 } },
        { text: 'Boa, sempre h� espa�o para melhorar.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'O trabalho est� dando frutos, fico feliz.', effects: { morale: 4, fans: 3, board: 4, sponsors: 3 } }
      ]
    },
    {
      q: 'Os jogadores est�o mais motivados?',
      opts: [
        { text: 'Sim, a confian�a motiva o grupo.', effects: { morale: 5, fans: 3, board: 3, sponsors: 3 } },
        { text: 'Muito, os resultados impulsionam.', effects: { morale: 4, fans: 3, board: 3, sponsors: 3 } },
        { text: 'A motiva��o est� em alta.', effects: { morale: 4, fans: 3, board: 3, sponsors: 3 } }
      ]
    },
    {
      q: 'A recupera��o f�sica est� contribuindo?',
      opts: [
        { text: 'Sim, o time est� bem fisicamente.', effects: { morale: 4, fans: 2, board: 4, sponsors: 3 } },
        { text: 'O departamento m�dico est� de parab�ns.', effects: { morale: 3, fans: 2, board: 4, sponsors: 3 } },
        { text: 'Os jogadores est�o em �tima condi��o.', effects: { morale: 4, fans: 2, board: 4, sponsors: 3 } }
      ]
    },
    {
      q: 'A forma do time � resultado do trabalho na base?',
      opts: [
        { text: 'Sim, os jovens est�o contribuindo.', effects: { morale: 4, fans: 3, board: 4, sponsors: 2 } },
        { text: 'Em partes, o trabalho � coletivo.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'A base � importante, mas � trabalho de todos.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'A boa forma pode durar o ano todo?',
      opts: [
        { text: 'Trabalharemos para que sim.', effects: { morale: 4, fans: 3, board: 4, sponsors: 3 } },
        { text: 'N�o posso garantir, mas estamos trabalhando.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'O time tem elenco para manter o n�vel.', effects: { morale: 4, fans: 3, board: 3, sponsors: 3 } }
      ]
    },
    {
      q: 'A forma atual � a melhor desde sua chegada?',
      opts: [
        { text: 'Sim, o time est� jogando o melhor futebol.', effects: { morale: 4, fans: 3, board: 4, sponsors: 3 } },
        { text: 'Est� entre os melhores momentos.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Cada fase � diferente, estou satisfeito.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'Como manter a motiva��o?',
      opts: [
        { text: 'Um jogo por vez, foco total.', effects: { morale: 4, fans: 3, board: 4, sponsors: 3 } },
        { text: 'Trabalho di�rio e objetivos claros.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'A ambi��o do grupo mant�m a motiva��o.', effects: { morale: 4, fans: 3, board: 3, sponsors: 3 } }
      ]
    }
  ],

  rivalry: [
    {
      q: 'Como voc� prepara o time para um cl�ssico?',
      opts: [
        { text: 'Com a mesma seriedade de qualquer jogo.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'An�lise espec�fica do advers�rio e motiva��o extra.', effects: { morale: 4, fans: 3, board: 3, sponsors: 3 } },
        { text: '� s� mais um jogo, mantenho a normalidade.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'A rivalidade � mais forte por causa da torcida?',
      opts: [
        { text: 'Sim, a paix�o dos torcedores aumenta a intensidade.', effects: { morale: 4, fans: 5, board: 3, sponsors: 3 } },
        { text: 'Em parte, mas a rivalidade vai al�m da torcida.', effects: { morale: 3, fans: 3, board: 3, sponsors: 2 } },
        { text: 'A rivalidade � hist�rica, a torcida intensifica.', effects: { morale: 4, fans: 5, board: 3, sponsors: 3 } }
      ]
    },
    {
      q: 'A m�dia cria press�o extra nesses jogos?',
      opts: [
        { text: 'Sim, � inevit�vel, mas lidamos bem.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Um pouco, mas n�o nos abala.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'A press�o faz parte, somos profissionais.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'A paix�o da torcida pode ser prejudicial?',
      opts: [
        { text: 'N�o, � combust�vel para o time.', effects: { morale: 4, fans: 5, board: 2, sponsors: 3 } },
        { text: '�s vezes, mas � mais positiva que negativa.', effects: { morale: 3, fans: 4, board: 2, sponsors: 2 } },
        { text: 'A paix�o � o que faz o futebol ser especial.', effects: { morale: 4, fans: 5, board: 2, sponsors: 3 } }
      ]
    },
    {
      q: 'Os jogadores sentem a press�o do cl�ssico?',
      opts: [
        { text: 'Sim, mas usam isso como motiva��o.', effects: { morale: 4, fans: 3, board: 3, sponsors: 3 } },
        { text: 'Alguns sim, trabalhamos a mentalidade.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Os jogadores s�o profissionais, sabem lidar.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'A hist�ria da rivalidade influencia o jogo?',
      opts: [
        { text: 'Sim, � uma motiva��o extra.', effects: { morale: 4, fans: 5, board: 3, sponsors: 3 } },
        { text: 'Em partes, mas o foco � no jogo atual.', effects: { morale: 3, fans: 3, board: 3, sponsors: 2 } },
        { text: 'A hist�ria � respeitada, mas o presente importa.', effects: { morale: 3, fans: 3, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'Voc� participa das provoca��es da m�dia?',
      opts: [
        { text: 'N�o, mantenho a profissionalismo.', effects: { morale: 3, fans: 2, board: 4, sponsors: 2 } },
        { text: 'Respondo com trabalho em campo.', effects: { morale: 3, fans: 3, board: 3, sponsors: 2 } },
        { text: 'Foco no jogo, n�o em provoca��o.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'O cl�ssico define a temporada?',
      opts: [
        { text: 'N�o, � s� mais um jogo, mas importante.', effects: { morale: 3, fans: 3, board: 3, sponsors: 2 } },
        { text: 'Pode influenciar, mas n�o define.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Todo jogo � uma final, este tamb�m.', effects: { morale: 3, fans: 3, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'Como voc� descreve a atmosfera de um cl�ssico?',
      opts: [
        { text: 'Incr�vel, � o que faz o futebol ser especial.', effects: { morale: 4, fans: 5, board: 3, sponsors: 4 } },
        { text: 'Intensa e emocionante, d� orgulho participar.', effects: { morale: 4, fans: 5, board: 3, sponsors: 3 } },
        { text: '�nica, n�o se compara a nenhum outro jogo.', effects: { morale: 4, fans: 5, board: 3, sponsors: 3 } }
      ]
    },
    {
      q: 'A rivalidade � saud�vel para o futebol?',
      opts: [
        { text: 'Sim, � o que mant�m a paix�o acesa.', effects: { morale: 3, fans: 4, board: 3, sponsors: 3 } },
        { text: 'Depende, deve ser respeitosa.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Sim, � parte da ess�ncia do esporte.', effects: { morale: 3, fans: 4, board: 3, sponsors: 3 } }
      ]
    },
    {
      q: 'Os torcedores rivalizam fora de campo?',
      opts: [
        { text: 'Infelizmente, �s vezes sim.', effects: { morale: 2, fans: 2, board: 2, sponsors: 1 } },
        { text: 'Rivalidade � s� no futebol, nada de viol�ncia.', effects: { morale: 3, fans: 4, board: 3, sponsors: 2 } },
        { text: 'A rivalidade deve ser respeitosa.', effects: { morale: 3, fans: 3, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'Como voc� lida com provoca��es do rival?',
      opts: [
        { text: 'Ignoro, foco no meu trabalho.', effects: { morale: 3, fans: 2, board: 4, sponsors: 2 } },
        { text: 'Respondo com resultados em campo.', effects: { morale: 3, fans: 3, board: 3, sponsors: 3 } },
        { text: 'Mantenho a calma e o profissionalismo.', effects: { morale: 3, fans: 2, board: 4, sponsors: 2 } }
      ]
    },
    {
      q: 'O time tem tradi��o nessa rivalidade?',
      opts: [
        { text: 'Sim, somos hist�ricos nesse cl�ssico.', effects: { morale: 4, fans: 5, board: 3, sponsors: 3 } },
        { text: 'A hist�ria � rica, orgulho em fazer parte.', effects: { morale: 4, fans: 5, board: 3, sponsors: 3 } },
        { text: 'A rivalidade faz parte da identidade do clube.', effects: { morale: 4, fans: 5, board: 3, sponsors: 3 } }
      ]
    },
    {
      q: 'A vit�ria no cl�ssico vale mais?',
      opts: [
        { text: 'Sim, tem valor emocional extra.', effects: { morale: 4, fans: 5, board: 3, sponsors: 4 } },
        { text: 'Vale tr�s pontos como qualquer jogo.', effects: { morale: 3, fans: 3, board: 3, sponsors: 2 } },
        { text: 'Para a torcida sim, para n�s � mais um resultado.', effects: { morale: 3, fans: 4, board: 3, sponsors: 3 } }
      ]
    },
    {
      q: 'Como você descreve o sentimento de vencer um clássico?',
      opts: [
        { text: 'Indescritível, felicidade para todos.', effects: { morale: 5, fans: 5, board: 4, sponsors: 4 } },
        { text: 'Muito bom, mas o foco já é no próximo jogo.', effects: { morale: 3, fans: 3, board: 3, sponsors: 3 } },
        { text: 'Emocionante, é o que faz o futebol ser especial.', effects: { morale: 4, fans: 5, board: 3, sponsors: 3 } }
      ]
    },
    {
      q: 'A rivalidade gera receita para o clube?',
      opts: [
        { text: 'Sim, jogos de clássico vendem mais ingressos.', effects: { morale: 3, fans: 3, board: 4, sponsors: 4 } },
        { text: 'A exposição midiática é maior nesses jogos.', effects: { morale: 3, fans: 3, board: 3, sponsors: 4 } },
        { text: 'Clássicos atraem mais público e receita.', effects: { morale: 3, fans: 3, board: 4, sponsors: 4 } }
      ]
    },
    {
      q: 'Os jogadores têm preferência por algum clássico?',
      opts: [
        { text: 'Todos são especiais, mas alguns têm mais tradição.', effects: { morale: 3, fans: 3, board: 3, sponsors: 3 } },
        { text: 'Cada clássico tem sua importância.', effects: { morale: 3, fans: 3, board: 3, sponsors: 2 } },
        { text: 'Os jogadores sentem a rivalidade de todos.', effects: { morale: 3, fans: 4, board: 3, sponsors: 3 } }
      ]
    },
    {
      q: 'A torcida rival é respeitada?',
      opts: [
        { text: 'Sim, respeito é fundamental no futebol.', effects: { morale: 3, fans: 4, board: 4, sponsors: 3 } },
        { text: 'Rivalidade não pode ultrapassar limites.', effects: { morale: 3, fans: 3, board: 4, sponsors: 2 } },
        { text: 'O respeito mútuo é essencial.', effects: { morale: 3, fans: 4, board: 4, sponsors: 3 } }
      ]
    },
    {
      q: 'A história da rivalidade pode ser usada como motivação?',
      opts: [
        { text: 'Sim, os jogadores conhecem a história do clube.', effects: { morale: 4, fans: 4, board: 3, sponsors: 3 } },
        { text: 'A história inspira os jogadores a darem o máximo.', effects: { morale: 4, fans: 4, board: 3, sponsors: 3 } },
        { text: 'Conhecer a história motiva o time.', effects: { morale: 4, fans: 4, board: 3, sponsors: 3 } }
      ]
    },
    {
      q: 'O clássico pode ser decidido por detalhes?',
      opts: [
        { text: 'Sim, nos clássicos os detalhes decidem.', effects: { morale: 3, fans: 3, board: 3, sponsors: 3 } },
        { text: 'Geralmente sim, é muito equilibrado.', effects: { morale: 3, fans: 3, board: 3, sponsors: 3 } },
        { text: 'Detalhes fazem a diferença em jogos apertados.', effects: { morale: 3, fans: 3, board: 3, sponsors: 3 } }
      ]
    }
  ],

  financial: [
    {
      q: 'A receita do clube est� crescendo?',
      opts: [
        { text: 'Sim, em diversas �reas.', effects: { morale: 3, fans: 2, board: 4, sponsors: 4 } },
        { text: 'Estamos trabalhando para isso.', effects: { morale: 2, fans: 1, board: 3, sponsors: 3 } },
        { text: 'O crescimento � cont�nuo, mas gradual.', effects: { morale: 3, fans: 2, board: 3, sponsors: 3 } }
      ]
    },
    {
      q: 'As despesas est�o sob controle?',
      opts: [
        { text: 'Sim, trabalhamos com gest�o profissional.', effects: { morale: 3, fans: 2, board: 5, sponsors: 4 } },
        { text: 'Estamos dentro do planejado.', effects: { morale: 3, fans: 1, board: 4, sponsors: 3 } },
        { text: 'A diretoria cuida disso, estou focado no futebol.', effects: { morale: 3, fans: 1, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'Os sponsors est�o satisfeitos?',
      opts: [
        { text: 'Sim, temos uma parceria forte.', effects: { morale: 3, fans: 2, board: 4, sponsors: 5 } },
        { text: 'Espero que sim, trabalhamos para isso.', effects: { morale: 3, fans: 2, board: 3, sponsors: 3 } },
        { text: 'Os sponsors s�o importantes para o clube.', effects: { morale: 3, fans: 2, board: 4, sponsors: 4 } }
      ]
    },
    {
      q: 'O est�dio gera receita?',
      opts: [
        { text: 'Sim, � uma fonte importante de receita.', effects: { morale: 3, fans: 3, board: 4, sponsors: 3 } },
        { text: 'Estamos trabalhando para maximizar.', effects: { morale: 3, fans: 2, board: 3, sponsors: 3 } },
        { text: 'O est�dio � um ativo valioso.', effects: { morale: 3, fans: 3, board: 4, sponsors: 3 } }
      ]
    },
    {
      q: 'Os direitos de transmiss�o s�o suficientes?',
      opts: [
        { text: 'S�o uma parte importante da receita.', effects: { morale: 3, fans: 2, board: 4, sponsors: 3 } },
        { text: 'Sempre pode ser mais, mas � justo.', effects: { morale: 2, fans: 2, board: 3, sponsors: 2 } },
        { text: 'O mercado de TV cresceu, estamos bem posicionados.', effects: { morale: 3, fans: 2, board: 4, sponsors: 3 } }
      ]
    },
    {
      q: 'O clube est� dentro do fair play financeiro?',
      opts: [
        { text: 'Sim, trabalhamos dentro das regras.', effects: { morale: 3, fans: 2, board: 5, sponsors: 4 } },
        { text: 'A diretoria garante conformidade.', effects: { morale: 3, fans: 1, board: 5, sponsors: 4 } },
        { text: 'Preocupa��o zero, estamos dentro da lei.', effects: { morale: 3, fans: 2, board: 5, sponsors: 4 } }
      ]
    },
    {
      q: 'O crescimento comercial � uma prioridade?',
      opts: [
        { text: 'Sim, � essencial para o clube.', effects: { morale: 2, fans: 1, board: 5, sponsors: 5 } },
        { text: 'Importante, mas o futebol vem primeiro.', effects: { morale: 3, fans: 3, board: 2, sponsors: 2 } },
        { text: 'Equil�brio entre comercial e esportivo.', effects: { morale: 3, fans: 2, board: 4, sponsors: 4 } }
      ]
    },
    {
      q: 'A d�vida do clube � preocupante?',
      opts: [
        { text: 'N�o, est� sob controle.', effects: { morale: 3, fans: 2, board: 4, sponsors: 3 } },
        { text: 'Estamos trabalhando para reduzir.', effects: { morale: 2, fans: 1, board: 3, sponsors: 2 } },
        { text: 'A diretoria gerencia isso, n�o � preocupante.', effects: { morale: 3, fans: 1, board: 4, sponsors: 3 } }
      ]
    },
    {
      q: 'O clube pode investir mais em jogadores?',
      opts: [
        { text: 'Dentro do planejado, sim.', effects: { morale: 3, fans: 2, board: 4, sponsors: 3 } },
        { text: 'O or�amento � limitado, mas administr�vel.', effects: { morale: 2, fans: 1, board: 3, sponsors: 2 } },
        { text: 'A diretoria trabalha com o que temos.', effects: { morale: 3, fans: 1, board: 3, sponsors: 2 } }
      ]
    },
    {
      q: 'Os ingressos esgotam?',
      opts: [
        { text: 'Sim, a torcida lota o est�dio.', effects: { morale: 4, fans: 5, board: 4, sponsors: 4 } },
        { text: 'Na maioria dos jogos, sim.', effects: { morale: 3, fans: 4, board: 4, sponsors: 3 } },
        { text: 'O p�blico � bom, mas sempre pode melhorar.', effects: { morale: 3, fans: 3, board: 3, sponsors: 3 } }
      ]
    },
    {
      q: 'A receita com camisas � significativa?',
      opts: [
        { text: 'Sim, � uma receita importante.', effects: { morale: 3, fans: 3, board: 3, sponsors: 4 } },
        { text: 'Crescendo, os torcedores compram bastante.', effects: { morale: 3, fans: 3, board: 3, sponsors: 4 } },
        { text: 'A marca do clube valoriza.', effects: { morale: 3, fans: 3, board: 3, sponsors: 4 } }
      ]
    },
    {
      q: 'O clube tem parcerias estrat�gicas?',
      opts: [
        { text: 'Sim, diversas parcerias que fortalecem o clube.', effects: { morale: 3, fans: 2, board: 4, sponsors: 4 } },
        { text: 'Estamos sempre buscando novas oportunidades.', effects: { morale: 3, fans: 2, board: 3, sponsors: 3 } },
        { text: 'As parcerias s�o importantes para o crescimento.', effects: { morale: 3, fans: 2, board: 4, sponsors: 4 } }
      ]
    },
    {
      q: 'A sustentabilidade financeira � uma meta?',
      opts: [
        { text: 'Sim, trabalhamos para ser sustent�veis.', effects: { morale: 3, fans: 2, board: 5, sponsors: 4 } },
        { text: '� um processo gradual, estamos caminhando.', effects: { morale: 3, fans: 2, board: 4, sponsors: 3 } },
        { text: 'Equil�brio entre crescimento e sustentabilidade.', effects: { morale: 3, fans: 2, board: 4, sponsors: 4 } }
      ]
    },
    {
      q: 'O investimento em marketing � importante?',
      opts: [
        { text: 'Sim, fortalece a marca do clube.', effects: { morale: 3, fans: 3, board: 4, sponsors: 4 } },
        { text: 'Importante, mas o futebol � prioridade.', effects: { morale: 3, fans: 2, board: 3, sponsors: 2 } },
        { text: 'Marketing � parte do crescimento do clube.', effects: { morale: 3, fans: 3, board: 4, sponsors: 4 } }
      ]
    },
    {
      q: 'O clube pode gerar mais receita?',
      opts: [
        { text: 'Sempre há oportunidades, estamos trabalhando.', effects: { morale: 3, fans: 2, board: 4, sponsors: 4 } },
        { text: 'Sim, em diversas áreas.', effects: { morale: 3, fans: 2, board: 4, sponsors: 4 } },
        { text: 'O crescimento é contínuo.', effects: { morale: 3, fans: 2, board: 4, sponsors: 4 } }
      ]
    },
    {
      q: 'A receita com eventos no estádio é importante?',
      opts: [
        { text: 'Sim, diversifica as fontes de receita.', effects: { morale: 3, fans: 2, board: 4, sponsors: 3 } },
        { text: 'O estádio pode gerar receita fora dos jogos.', effects: { morale: 3, fans: 2, board: 3, sponsors: 3 } },
        { text: 'Eventos complementam a receita do clube.', effects: { morale: 3, fans: 2, board: 4, sponsors: 3 } }
      ]
    },
    {
      q: 'O clube tem planos de renovação do estádio?',
      opts: [
        { text: 'Sim, investir em infraestrutura é prioridade.', effects: { morale: 3, fans: 3, board: 4, sponsors: 4 } },
        { text: 'Estamos avaliando melhorias necessárias.', effects: { morale: 3, fans: 2, board: 3, sponsors: 3 } },
        { text: 'O estádio é um ativo que precisa de cuidados.', effects: { morale: 3, fans: 3, board: 4, sponsors: 3 } }
      ]
    },
    {
      q: 'A gestão financeira é transparente?',
      opts: [
        { text: 'Sim, trabalhamos com total transparência.', effects: { morale: 3, fans: 3, board: 5, sponsors: 4 } },
        { text: 'A diretoria presta contas corretamente.', effects: { morale: 3, fans: 2, board: 5, sponsors: 4 } },
        { text: 'Transparência é uma virtude do clube.', effects: { morale: 3, fans: 3, board: 5, sponsors: 4 } }
      ]
    },
    {
      q: 'O clube pode expandir para novos mercados?',
      opts: [
        { text: 'Sim, a marca do clube tem potencial global.', effects: { morale: 3, fans: 3, board: 4, sponsors: 5 } },
        { text: 'Estamos avaliando oportunidades internacionais.', effects: { morale: 3, fans: 2, board: 3, sponsors: 4 } },
        { text: 'A internacionalização é parte do crescimento.', effects: { morale: 3, fans: 3, board: 4, sponsors: 4 } }
      ]
    },
    {
      q: 'O investimento em dados é uma prioridade?',
      opts: [
        { text: 'Sim, dados ajudam nas decisões esportivas e financeiras.', effects: { morale: 3, fans: 2, board: 5, sponsors: 3 } },
        { text: 'Estamos implementando análise de dados.', effects: { morale: 3, fans: 2, board: 4, sponsors: 3 } },
        { text: 'Dados são fundamentais para decisões inteligentes.', effects: { morale: 3, fans: 2, board: 5, sponsors: 3 } }
      ]
    },
    {
      q: 'O clube diversificou suas fontes de receita?',
      opts: [
        { text: 'Sim, não dependemos só de uma área.', effects: { morale: 3, fans: 2, board: 5, sponsors: 4 } },
        { text: 'Estamos trabalhando nisso, é um processo.', effects: { morale: 3, fans: 2, board: 4, sponsors: 3 } },
        { text: 'A diversificação é importante para estabilidade.', effects: { morale: 3, fans: 2, board: 5, sponsors: 4 } }
      ]
    },
    {
      q: 'O clube tem reserva financeira?',
      opts: [
        { text: 'Sim, trabalhamos com planejamento.', effects: { morale: 3, fans: 2, board: 5, sponsors: 4 } },
        { text: 'A diretoria mantém reservas para imprevistos.', effects: { morale: 3, fans: 2, board: 4, sponsors: 3 } },
        { text: 'Reserva financeira é essencial para segurança.', effects: { morale: 3, fans: 2, board: 5, sponsors: 4 } }
      ]
    },
    {
      q: 'A receita com licenciamento é crescente?',
      opts: [
        { text: 'Sim, a marca do clube valoriza.', effects: { morale: 3, fans: 3, board: 4, sponsors: 5 } },
        { text: 'O licenciamento é uma fonte importante.', effects: { morale: 3, fans: 3, board: 3, sponsors: 4 } },
        { text: 'Produtos licenciados trazem receita constante.', effects: { morale: 3, fans: 3, board: 4, sponsors: 5 } }
      ]
    },
    {
      q: 'O clube investe em formação de gestão?',
      opts: [
        { text: 'Sim, profissionalizar a gestão é prioridade.', effects: { morale: 3, fans: 2, board: 5, sponsors: 3 } },
        { text: 'A diretoria busca capacitação constante.', effects: { morale: 3, fans: 2, board: 4, sponsors: 3 } },
        { text: 'Gestão profissional garante o futuro do clube.', effects: { morale: 3, fans: 2, board: 5, sponsors: 3 } }
      ]
    },
    {
      q: 'O clube pode criar uma marca global?',
      opts: [
        { text: 'Sim, temos potencial para isso.', effects: { morale: 4, fans: 3, board: 4, sponsors: 5 } },
        { text: 'Estamos trabalhando para isso.', effects: { morale: 3, fans: 2, board: 4, sponsors: 4 } },
        { text: 'A internacionalização é um processo gradual.', effects: { morale: 3, fans: 2, board: 4, sponsors: 4 } }
      ]
    }
  ]
};
