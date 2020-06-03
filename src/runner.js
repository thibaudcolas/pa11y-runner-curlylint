const { spawnSync } = require("child_process");

const runner = {
  // Update this when an API-compatible Pa11y gets released.
  supports: "^6.0.0-alpha || ^6.0.0-beta",
  // Needs to be defined even if this runner does not rely on any scripts.
  scripts: [],
  // Needs to be defined even though it’s empty.
  run: () => {},
};

runner.processPage = async (page) => {
  const html = await page.content();
  let messages = [];
  try {
    const { stdout } = spawnSync(
      "curlylint",
      [
        "--format",
        "json",
        "--quiet",
        "--rule",
        "html_has_lang: true",
        "--rule",
        "aria_role: true",
        "-",
      ],
      {
        input: html,
        windowsHide: true,
      },
    );
    messages = JSON.parse(stdout.toString());
  } catch (e) {
    return [];
  }

  return messages.map((message) => ({
    code: message.code,
    message: message.message,
    type: "error",
    // curlylint currently doesn’t provide context.
    context: "",
    // There is no selector provided by curlylint.
    selector: "",
    runnerExtras: {
      // Not entirely sure how useful these are. To de-dupe issues perhaps?
      // line: message.line,
      // column: message.column,
    },
  }));
};

module.exports = runner;
