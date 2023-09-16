var controller = require("./api-tef");

async function app() {
  console.log("Iniciando a aplicação api-tef");

  try {
    console.log("Iniciando o módulo api-tef web server");

    controller.server.listen(8081, function() {
      console.log(
        "%s módulo iniciado em %s",
        controller.server.name,
        `[]:8081/api-tef`
      );
    });
  } catch (err) {
    console.log("Erro ao iniciar api api-tef.");
    console.error(err);
    process.exit(1);
  }
}

app();