"use client";

import React, { useState } from "react";

export default function Upload() {
  const [file, setFile] = useState<File | null>(null);
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleUpload() {
    if (!file) return alert("Please select a file first!");

    setLoading(true);

    try {
      // Dynamically import ipfs-http-client (avoids SSR issue)
      const { create } = await import("ipfs-http-client");
      const client = create({ url: "https://ipfs.infura.io:5001/api/v0" });

      const added = await client.add(file);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      setFileUrl(url);
    } catch (err) {
      console.error("Upload error:", err);
      alert("Upload failed. Check console for details.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-4 border rounded-lg shadow space-y-3">
      <input
        type="file"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="block"
      />

      <button
        onClick={handleUpload}
        disabled={!file || loading}
        className={`mt-2 px-4 py-2 rounded text-white ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {loading ? "Uploading..." : "Upload"}
      </button>

      {fileUrl && (
        <p className="text-sm mt-2">
          File uploaded:{" "}
          <a
            href={fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            {fileUrl}
          </a>
        </p>
      )}
    </div>
  );
}
