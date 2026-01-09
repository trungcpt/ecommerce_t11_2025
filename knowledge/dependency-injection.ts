interface ILog {
  logFunc(className: string): void;
}
class Log implements ILog {
  constructor() {}

  logFunc(className: string) {
    console.log('>>> log', className);
  }
}

class LogFile implements ILog {
  constructor() {}

  logFunc(className: string) {
    console.log('>>> log file', className);
  }
}

// class User {
//   private log: LogFile;

//   constructor() {
//     this.log = new LogFile();
//   }

//   logUser() {
//     this.log.logFunc(User.name);
//   }
// }

// DI
class User {
  private log: ILog;

  constructor(log: ILog) {
    // Inject log từ bên ngoài vào
    this.log = log;
  }

  logUser() {
    this.log.logFunc(User.name);
  }
}

const user = new User(new LogFile());

user.logUser();
