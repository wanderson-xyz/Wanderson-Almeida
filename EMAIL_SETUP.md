# Configuração do Envio de E-mails - EmailJS

Para que o formulário de contato funcione corretamente, você precisa configurar o EmailJS. Siga os passos abaixo:

## 1. Criar Conta no EmailJS

1. Acesse [EmailJS](https://www.emailjs.com/)
2. Crie uma conta gratuita (permite até 200 e-mails por mês)
3. Faça login no dashboard

## 2. Configurar o Serviço de E-mail

1. No dashboard, vá em **Email Services**
2. Clique em **Add New Service**
3. Escolha **Gmail** (recomendado) ou outro provedor
4. Configure com seus dados:
   - **Service ID**: anote esse ID (ex: `service_abc1234`)
   - **User ID**: seu e-mail do Gmail
   - **Password**: use App Password do Gmail (não a senha normal)

### Como gerar App Password do Gmail:
1. Vá nas configurações da sua conta Google
2. Ative autenticação de 2 fatores
3. Vá em "App Passwords" 
4. Gere uma senha específica para EmailJS
5. Use essa senha no EmailJS

## 3. Criar Template de E-mail

1. No dashboard, vá em **Email Templates**
2. Clique em **Create New Template**
3. Configure o template:
   - **Template ID**: anote esse ID (ex: `template_xyz5678`)
   - **Subject**: `Novo contato do portfólio - {{from_name}}`
   - **Content**: Use as variáveis abaixo

### Template de E-mail recomendado:
```
Olá Wanderson,

Você recebeu uma nova mensagem através do seu portfólio:

Nome: {{from_name}}
E-mail: {{from_email}}

Mensagem:
{{message}}

---
Esta mensagem foi enviada através do formulário de contato do seu portfólio.
```

## 4. Obter a Public Key

1. No dashboard, vá em **Account**
2. Copie a **Public Key** (ex: `user_abc123xyz`)

## 5. Atualizar o Código

Abra o arquivo `src/hooks/use-send-email.ts` e substitua os valores:

```typescript
const EMAILJS_SERVICE_ID = 'seu_service_id_aqui'
const EMAILJS_TEMPLATE_ID = 'seu_template_id_aqui'  
const EMAILJS_PUBLIC_KEY = 'sua_public_key_aqui'
```

## 6. Testar o Formulário

1. Acesse seu site
2. Preencha o formulário de contato
3. Envie uma mensagem de teste
4. Verifique se recebeu o e-mail

## Resolução de Problemas

### E-mail não chega:
- Verifique se as credenciais estão corretas
- Confirme se o App Password do Gmail foi configurado
- Verifique a caixa de spam
- Teste com outro e-mail de destino

### Erros 401/403:
- Verifique se a Public Key está correta
- Confirme se o serviço está ativo no EmailJS
- Verifique se não ultrapassou o limite mensal

### Errors de template:
- Confirme se o Template ID está correto
- Verifique se as variáveis no template estão corretas
- Teste o template no dashboard do EmailJS

## Alternativas

Se preferir usar o SendGrid (configuração mais complexa):
1. Mantenha o arquivo `src/api/send-email.ts` 
2. Configure um backend (Vercel, Netlify Functions, etc.)
3. Adicione a chave API do SendGrid nas variáveis de ambiente

Para projetos simples, o EmailJS é mais fácil de configurar e usar.