# Midnight-Hackathon
Project for Midnight Hackathon

# ShadowShare – Private, Expiring File Sharing DApp

ShadowShare is a decentralized file sharing application built with **Midnight’s privacy-preserving smart contracts**.  
It allows users to share files securely with specific recipients, enforce **time-based expiry**, and audit usage with **zero-knowledge proofs** – all while keeping files completely private.  

---

## ✨ Features
- **Private File Sharing** – Only approved wallet addresses can access shared files.  
- **Time-to-Live (TTL) Expiry** – Files automatically expire after the set duration (e.g., 24 hours, 7 days).  
- **Zero-Knowledge Auditing** – Verify that files were accessed without revealing *who* accessed them.  
- **Client-Side Encryption** – Files are encrypted in-browser before upload.  
- **Off-Chain Storage** – File contents stored on IPFS/Arweave, with encrypted hashes and access rules on Midnight.  

---

## 🚀 How It Works
1. **Upload a File**  
   - User drops a file into the UI.  
   - File is encrypted locally in the browser.  

2. **Set Rules**  
   - Choose recipients by wallet address.  
   - Define expiry duration (e.g., 24h).  

3. **Share Link**  
   - DApp generates a shareable private link or QR code.  

4. **Recipient Access**  
   - Recipient connects their wallet.  
   - Midnight smart contract verifies permissions + expiry.  
   - Recipient decrypts and downloads the file.  

5. **Audit (Optional)**  
   - Admin can run a proof to check *how many times* a file was accessed, without revealing user identities.  

---

## 🛠️ Tech Stack
- **Frontend**: React / Next.js  
- **Smart Contracts**: Midnight  
- **Storage**: IPFS (for file data), Midnight (for encrypted metadata & rules)  
- **Encryption**: Client-side AES/RSA hybrid  
- **Wallet**: Midnight-compatible wallet integration  

---

## 📸 Demo Flow
1. Upload file → Select recipients → Set expiry.  
2. Copy/share link.  
3. Recipient opens link, authenticates wallet, downloads file.  
4. After expiry, file access is denied.  

---

## 🔧 Installation

```bash
# Clone repo
git clone https://github.com/your-team/shadowshare.git
cd shadowshare

# Install dependencies
npm install

# Run development server
npm run dev

