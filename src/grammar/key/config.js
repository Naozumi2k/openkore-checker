class config {
  check_key(key) {
    return key in this.keys;
  }

  check_value(key, value) {
    if (this.check_key(key)) {
      return this.keys[key].test(value);
    }
    return true;
  }

  check_block(block) {
    return block in this.blocks;
  }

  check_block_key(block, key) {
    if (this.check_block(block)) {
      return key in this.blocks[block].keys;
    }
    return false;
  }

  check_block_keyvalue(block, key, value) {
    if (this.check_block(block)) {
      if (this.blocks[block].keys[key]) {
        return this.blocks[block].keys[key].test(value);
      }
    }
    return true;
  }

  keys = {
    master: /.*/,
    server: /.*/,
    username: /.*/,
    password: /.*/,
    loginPinCode: /.*/,
    char: /\d?/,
    poseidonServer: /((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))?/,
    poseidonPort: /\d+/,
    bindIp: /((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))?/,
    forceMapIP: /((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))?/,
    XKore: /(0|1|2)/,
    XKore_port: /\d+/,
    XKore_dll: /.*/,
    XKore_injectDLL: /(0|1)/,
    XKore_autoAttachIfOneExe: /(0|1)/,
    XKore_silent: /(0|1)/,
    XKore_bypassBotDetection: /(0|1)/,
    XKore_exeName: /.*/,
    XKore_listenIp: /((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))?/,
    XKore_listenPort: /\d+/,
    XKore_publicIp: /((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))?/,
    // XKore_ID: //,
    secureAdminPassword: /(0|1)/,
    adminPassword: /.*/,
    // callSign: //,
    commandPrefix: /.{1}/,
    callSignGM: /(0|1)/,
    inGameAuth: /(0|1)/,
  };

  blocks = {
    autoBreakTime: {
      keys: {
        startTime: /.*/,
        stopTime: /.*/,
      },
    },
    autoConfChange: {
      keys: {
        minTime: /.*/,
        varTime: /.*/,
        lvl: /\d*/,
        joblvl: /\d*/,
      },
    },
    monsterSkill: {
      keys: {},
    },
  };
}

module.exports = config;