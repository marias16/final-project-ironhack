import { createClient } from '@supabase/supabase-js'

const supabaseURL ="https://yawstqdmvjozauleiion.supabase.co"
const supabaseAPIKEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlhd3N0cWRtdmpvemF1bGVpaW9uIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEyMjk3MDgsImV4cCI6MTk5NjgwNTcwOH0.7XsrYz8mikJmW5NDdlntYBd9rQMqIsEhvKLAVx17-64"
// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseURL, supabaseAPIKEY)

