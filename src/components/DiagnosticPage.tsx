import React from 'react';

export default function DiagnosticPage() {
  const envVars = {
    supabaseUrl: import.meta.env.VITE_SUPABASE_URL,
    supabaseKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
  };

  const browserInfo = {
    userAgent: navigator.userAgent,
    language: navigator.language,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  };

  return (
    <div style={{
      padding: '20px',
      fontFamily: 'monospace',
      backgroundColor: '#000',
      color: '#0f0',
      minHeight: '100vh',
      lineHeight: '1.6'
    }}>
      <h1>Cyber-Sphere Diagnostic Page</h1>
      
      <h2>Environment Variables:</h2>
      <pre style={{ backgroundColor: '#111', padding: '10px', borderRadius: '4px' }}>
        {JSON.stringify(envVars, null, 2)}
      </pre>

      <h2>Browser Info:</h2>
      <pre style={{ backgroundColor: '#111', padding: '10px', borderRadius: '4px' }}>
        {JSON.stringify(browserInfo, null, 2)}
      </pre>

      <h2>Status:</h2>
      <div style={{ marginTop: '20px' }}>
        <p>✓ React is loaded</p>
        <p>✓ JavaScript is working</p>
        <p>{envVars.supabaseUrl ? '✓' : '✗'} Supabase URL: {envVars.supabaseUrl ? 'SET' : 'NOT SET'}</p>
        <p>{envVars.supabaseKey ? '✓' : '✗'} Supabase Key: {envVars.supabaseKey ? 'SET' : 'NOT SET'}</p>
      </div>

      <h2>Next Steps:</h2>
      <ol>
        <li>Check if environment variables show as SET</li>
        <li>If NOT SET: Go to Vercel dashboard → Settings → Environment Variables</li>
        <li>Add both variables and redeploy</li>
        <li>If SET: Check browser console (F12) for errors</li>
      </ol>

      <div style={{ marginTop: '40px', fontSize: '12px', color: '#666' }}>
        <p>If you see "NOT SET" for variables, the issue is Vercel environment configuration.</p>
        <p>If variables show as SET, there may be a JavaScript error - check console (F12).</p>
      </div>
    </div>
  );
}
