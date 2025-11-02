# ZKEncrypt CLI

Command-line interface for ZKEncrypt Network - Manage your FHE operations, payments, and more from the terminal.

## 🚀 Installation

### NPM
```bash
npm install -g @zkencrypt/cli
```

### Yarn
```bash
yarn global add @zkencrypt/cli
```

## 📖 Usage

### Initialize Configuration

```bash
zkencrypt init
```

This creates a `.zkencrypt/config.json` file with your network settings.

### Wallet Management

```bash
# Create new wallet
zkencrypt wallet create

# Import existing wallet
zkencrypt wallet import

# Show wallet address
zkencrypt wallet address

# Check balance
zkencrypt wallet balance
```

### FHE Operations

```bash
# Encrypt data
zkencrypt encrypt "Sensitive data" --output encrypted.bin

# Decrypt data
zkencrypt decrypt encrypted.bin --key my-private-key

# Encrypt file
zkencrypt encrypt-file document.pdf --output document.enc
```

### x402 Micropayments

```bash
# Send payment
zkencrypt pay <recipient-address> <amount>

# Send encrypted payment
zkencrypt pay <recipient-address> <amount> --encrypted

# View payment history
zkencrypt payments list

# Get payment details
zkencrypt payments get <signature>
```

### AI Oracle

```bash
# Query oracle
zkencrypt oracle query "Your prompt here" --model gpt-4

# Encrypted oracle query
zkencrypt oracle query "Sensitive prompt" --encrypted

# List available models
zkencrypt oracle models
```

### Private Swaps

```bash
# Execute swap
zkencrypt swap SOL USDC 1.5 --to <your-address>

# Get swap quote
zkencrypt swap quote SOL USDC 1.5

# View swap history
zkencrypt swaps list
```

### Network Stats

```bash
# View network statistics
zkencrypt stats

# View user statistics
zkencrypt stats --user <address>

# Export stats to JSON
zkencrypt stats --export stats.json
```

### Contract Deployment

```bash
# Deploy confidential ERC20
zkencrypt deploy erc20 --name "MyToken" --symbol "MTK"

# Deploy from Solidity file
zkencrypt deploy contract.sol --network sepolia

# Verify contract
zkencrypt verify <contract-address> --network sepolia
```

## ⚙️ Configuration

Create `.zkencrypt/config.json`:

```json
{
  "network": "mainnet-beta",
  "rpcUrl": "https://api.mainnet-beta.solana.com",
  "fheEndpoint": "https://fhe.zk-labs.network",
  "oracleEndpoint": "https://oracle.zk-labs.network",
  "defaultWallet": "~/.zkencrypt/wallet.json"
}
```

## 🔐 Security

- Private keys are stored encrypted in `~/.zkencrypt/wallet.json`
- Uses system keychain for password storage
- Never logs sensitive information
- Supports hardware wallets (Ledger, Trezor)

## 📋 Commands Reference

### Global Options

```bash
--network <name>    Specify network (mainnet-beta, devnet)
--config <path>     Custom config file path
--wallet <path>     Custom wallet file path
--verbose           Enable verbose logging
--help              Show help
--version           Show version
```

### Wallet Commands

| Command | Description |
|---------|-------------|
| `wallet create` | Create new wallet |
| `wallet import` | Import existing wallet |
| `wallet export` | Export wallet |
| `wallet address` | Show wallet address |
| `wallet balance` | Check wallet balance |
| `wallet send` | Send SOL |

### Encryption Commands

| Command | Description |
|---------|-------------|
| `encrypt <data>` | Encrypt data |
| `decrypt <ciphertext>` | Decrypt data |
| `encrypt-file <file>` | Encrypt file |
| `decrypt-file <file>` | Decrypt file |

### Payment Commands

| Command | Description |
|---------|-------------|
| `pay <address> <amount>` | Send payment |
| `payments list` | List payment history |
| `payments get <sig>` | Get payment details |

### Oracle Commands

| Command | Description |
|---------|-------------|
| `oracle query <prompt>` | Query AI oracle |
| `oracle models` | List available models |
| `oracle history` | View query history |

### Swap Commands

| Command | Description |
|---------|-------------|
| `swap <from> <to> <amount>` | Execute swap |
| `swap quote <from> <to> <amount>` | Get swap quote |
| `swaps list` | View swap history |

### Contract Commands

| Command | Description |
|---------|-------------|
| `deploy <type>` | Deploy contract |
| `verify <address>` | Verify contract |
| `interact <address> <method>` | Call contract method |

## 🎯 Examples

### Complete Workflow Example

```bash
# 1. Initialize
zkencrypt init

# 2. Create wallet
zkencrypt wallet create

# 3. Encrypt sensitive data
zkencrypt encrypt "My secret data" --output secret.enc

# 4. Send encrypted payment
zkencrypt pay 8kQv...xyz 0.001 --encrypted

# 5. Query AI oracle privately
zkencrypt oracle query "Analyze this encrypted data" --encrypted

# 6. Execute private swap
zkencrypt swap SOL USDC 1.0 --to 8kQv...xyz

# 7. View stats
zkencrypt stats
```

## 🛠️ Development

```bash
# Clone repository
git clone https://github.com/ZKEncrypt-AI/zkencrypt-cli.git
cd zkencrypt-cli

# Install dependencies
npm install

# Link for local development
npm link

# Run tests
npm test

# Build
npm run build
```

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

## 🔗 Links

- [Documentation](https://zkencrypt-ai.gitbook.io/zkencrypt-ai)
- [GitHub](https://github.com/ZKEncrypt-AI/zkencrypt-cli)

---

Built with ❤️ by the ZKEncrypt AI team
