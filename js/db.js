console.log('Loaded db.js');

const SUPABASE_URL = 'https://ygcjrxqtzpxowvlhhqqb.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlnY2pyeHF0enB4b3d2bGhocXFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzNzAxNTYsImV4cCI6MjA2Njk0NjE1Nn0.C9aLiYQG95Pgu1qG6vbmjspBuxgGCRrwJvO8w2z1HgQ';

window.client = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

console.log('Supabase client initialized:', window.client);
