import SSHClient from './../ssh/connect.js';
import debug from 'debug';
const log = debug('');
export default class Handle {
    constructor() {
        this.ssh = new SSHClient();
    }
    command(server,commandJson={}) {
        this.ssh.connect({
            host: server.host,
            port: server.port,
            username: server.username,
            password: server.password,
        }).then((conn) => {
            let command = commandJson.command;
            const commands = server.commands;
            for (const key in commands) {
                if(key === command){
                    command = commands[key];
                }
            }
            switch (command) {
                case "ls":{
                    return this.ssh.executeCommand(command);
                    break;
                }
                case "pm2 l":{
                    return this.ssh.executeCommand(command);
                }
                case "pkill chrome":{
                    return this.ssh.executeCommand(command);
                }
                default:{
                    return this.ssh.executeCommand(command);
                }
            }
        }).then((output) => {
            log("Server:",server.host)
            log( output.output);
            this.ssh.close();
        }).catch((err) => {
            log(server.host+' SSH Error:', err);
        });
    }
}