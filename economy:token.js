class TokenSystem {
    constructor(){ this.balances = {}; }
    mint(user, amount){ this.balances[user]=(this.balances[user]||0)+amount; }
    transfer(from,to,amount){
        if((this.balances[from]||0)>=amount){ this.balances[from]-=amount; this.balances[to]=(this.balances[to]||0)+amount; }
    }
}
export default new TokenSystem();