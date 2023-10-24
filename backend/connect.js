import { Client } from 'ssh2';
import debug from 'debug';
const log = debug('ssh2');
class SSHClient {
    constructor() {
        this.conn = new Client();
        this.shell = null;
    }
    async connect({ host, port, username, password }) {
        return new Promise((resolve, reject) => {
            this.conn.on('ready', () => {
                console.log('Connected to the remote server');
                resolve(this.conn);
            });

            this.conn.on('error', (err) => {
                console.error('SSH connection error:', err);
                reject(err);
            });

            this.conn.connect({
                host,
                port,
                username,
                password,
            });
        });
    }
    async executeCommand(command) {
        return new Promise((resolve, reject) => {
            this.conn.exec(command, (err, stream) => {
                if (err) {
                    log('Error executing command:', err);
                    reject(err);
                }

                let output = '';
                let errorOutput = '';

                stream.on('close', (code, signal) => {
                    log(`Command closed with code ${code}`);
                    resolve({ output, errorOutput });
                }).on('data', (data) => {
                    output += data.toString();
                }).stderr.on('data', (data) => {
                    errorOutput += data.toString();
                });
            });
        });
    }
    close() {
        this.conn.end();
    }
    async changeDirectory(directoryPath) {
        return new Promise((resolve, reject) => {
            this.conn.shell((err, stream) => {
                if (err) {
                    console.error('Error starting shell:', err);
                    reject(err);
                }

                this.shell = stream;
                this.shell.on('data', (data) => {
                    // Đọc dữ liệu đầu ra từ shell để xác nhận lệnh đã hoàn thành
                    if (data.toString().endsWith('$ ')) {
                        this.shell.end(`cd ${directoryPath}\n`);
                    }
                });

                this.shell.on('close', (code, signal) => {
                    console.log(`Shell closed with code ${code}`);
                    resolve();
                });
            });
        });
    }
}
export default SSHClient;
