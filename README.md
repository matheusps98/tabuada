# 🧮 Gerador de Tabuada

Um projeto interativo para gerar tabuadas de multiplicação com interface moderna e responsiva.

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Detalhes do JavaScript](#detalhes-do-javascript)
- [Como Usar](#como-usar)
- [Estrutura de Arquivos](#estrutura-de-arquivos)

## 🎯 Visão Geral

O **Gerador de Tabuada** é uma aplicação web que permite ao usuário inserir um número e gerar sua tabuada de multiplicação até um valor limite especificado. O projeto foi desenvolvido com foco em:

- **Interface intuitiva** e moderna
- **Responsividade** para diferentes dispositivos
- **Código limpo** e bem estruturado
- **Acessibilidade** e semântica HTML

## ✨ Funcionalidades

- ✅ **Entrada de dados**: Campos para número base e limite de multiplicação
- ✅ **Geração dinâmica**: Criação automática da tabuada na tela
- ✅ **Validação**: Verificação se os campos foram preenchidos
- ✅ **Limpeza automática**: Remove resultados anteriores antes de gerar novos
- ✅ **Feedback visual**: Atualização do título com o número da tabuada
- ✅ **Interface responsiva**: Funciona em desktop e mobile

## 🚀 Tecnologias Utilizadas

### Frontend

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização e responsividade
- **JavaScript ES6+** - Interatividade e lógica

### Recursos Específicos

- **Google Fonts** - Fontes personalizadas (Bebas Neue, Ubuntu)
- **CSS Grid e Flexbox** - Layout responsivo
- **Background animado** - Imagem GIF para efeito visual
- **Box Shadow** - Efeitos de profundidade

## 🏗️ Estrutura do Projeto

```
tabuada/
├── index.html          # Estrutura principal
├── css/
│   └── styles.css      # Estilos e responsividade
├── js/
│   └── scripts.js      # Lógica da aplicação
├── img/
│   └── background.gif  # Imagem de fundo
└── README.md           # Documentação
```

## 🔧 Detalhes do JavaScript

### **Seleção de Elementos DOM**

```javascript
const multiplicationForm = document.getElementById("multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");
const multiplicationTitle = document.querySelector(
  "#multiplication-table span"
);
const multiplicationTable = document.querySelector(
  "#multiplication-operations"
);
```

### **Técnicas Utilizadas**

#### 1. **Manipulação do DOM**

- `document.getElementById()` - Seleção por ID
- `document.querySelector()` - Seleção por seletor CSS
- `innerHTML` - Limpeza de conteúdo
- `appendChild()` - Adição de elementos ao DOM

#### 2. **DOMParser API**

```javascript
const parser = new DOMParser();
const htmlTemplate = parser.parseFromString(template, "text/html");
const row = htmlTemplate.querySelector(".row");
```

- **Propósito**: Converte string HTML em elementos DOM reais
- **Vantagem**: Mais seguro que `innerHTML` para inserção de conteúdo
- **Uso**: Parsing de templates HTML antes da inserção

#### 3. **Template Literals (ES6)**

```javascript
const template = `
    <div class="row">
        <div class="operation">${number} x ${i} =</div>
        <div class="result">${result}</div>
    </div>
`;
```

- **Interpolação**: Inserção de variáveis com `${}`
- **Multilinhas**: Strings em múltiplas linhas
- **Legibilidade**: Código mais limpo e legível

#### 4. **Event Handling**

```javascript
multiplicationForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // Lógica do formulário
});
```

- **preventDefault()**: Previne comportamento padrão do form
- **Arrow Functions**: Sintaxe moderna ES6
- **Event Listeners**: Escuta de eventos do usuário

#### 5. **Validação de Dados**

```javascript
const multiplicationNumber = +numberInput.value;
const multiplicatorNumber = +multiplicationInput.value;

if (!multiplicationNumber || !multiplicatorNumber) return;
```

- **Operador Unário +**: Conversão string para number
- **Validação booleana**: Verifica se valores são válidos
- **Early Return**: Saída antecipada em caso de erro

#### 6. **Loops e Algoritmos**

```javascript
for (i = 1; i <= multiplicationNumber; i++) {
  const result = number * i;
  // Geração da tabuada
}
```

- **For Loop**: Iteração controlada
- **Cálculo matemático**: Multiplicação simples
- **Geração dinâmica**: Criação de elementos em tempo real

### **Funções Principais**

#### `createTable(number, multiplicationNumber)`

- **Parâmetros**:
  - `number`: Número base da tabuada
  - `multiplicationNumber`: Limite de multiplicação
- **Responsabilidades**:
  - Limpa conteúdo anterior
  - Gera loop de multiplicação
  - Cria elementos HTML dinamicamente
  - Atualiza título da tabuada

### **Padrões de Código**

#### ✅ **Boas Práticas Implementadas**

- **Separação de responsabilidades**: HTML, CSS e JS separados
- **Nomenclatura clara**: Nomes de variáveis em português
- **Comentários explicativos**: Documentação em português
- **Const/Let**: Uso correto de declaração de variáveis
- **Template Literals**: Strings mais legíveis
- **DOM Manipulation**: Técnicas modernas e seguras

#### 🔄 **Fluxo de Execução**

1. **Carregamento**: Script carrega com `defer`
2. **Seleção**: Elementos DOM são selecionados
3. **Evento**: Usuário submete formulário
4. **Validação**: Campos são verificados
5. **Processamento**: Função `createTable` é executada
6. **Renderização**: Tabuada é exibida na tela

## 🎮 Como Usar

1. **Abra o arquivo** `index.html` no navegador
2. **Preencha os campos**:
   - **Tabuada do**: Número base (ex: 5)
   - **Multiplicar até**: Limite superior (ex: 10)
3. **Clique em "Calcular"**
4. **Visualize** a tabuada gerada na tela

### Exemplo de Uso:

- **Entrada**: Tabuada do 7, multiplicar até 12
- **Saída**: 7x1=7, 7x2=14, 7x3=21... até 7x12=84

## 🎨 Características Visuais

- **Background animado** com GIF
- **Cores modernas** com esquema vermelho (#DB4444)
- **Tipografia** customizada (Bebas Neue, Ubuntu)
- **Layout responsivo** com Flexbox
- **Efeitos hover** nos botões
- **Sombras** para profundidade visual

## 📱 Responsividade

O projeto é totalmente responsivo e funciona em:

- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (320px - 767px)

---

**Desenvolvido com 💻 e muito ☕ para aprendizado de JavaScript moderno**
