/*
# Create trial_bookings table for contact form submissions

1. New Tables
- `trial_bookings`
- `id` (uuid, primary key, auto-generated)
- `name` (text, not null) — the name of the person submitting the form
- `applicant_type` (text, not null) — whether the submitter is a "Parent" or "Player"
- `age` (text, not null) — the age of the player
- `phone` (text, not null) — contact phone number
- `email` (text, not null) — contact email address
- `message` (text) — optional message from the submitter
- `status` (text, default 'pending') — booking status: pending, contacted, confirmed, completed
- `created_at` (timestamptz, default now()) — when the booking was submitted

2. Security
- Enable RLS on `trial_bookings`.
- This is a no-auth public contact form. The public (anon role) needs to INSERT new bookings.
- No SELECT/UPDATE/DELETE for anon — only authenticated (admin) users can read or manage bookings.
- INSERT policy for anon, authenticated: anyone can submit a trial booking.
- SELECT/UPDATE/DELETE policies for authenticated only: academy staff can review and manage submissions.

3. Notes
- The contact form on the website writes to this table using the anon Supabase key.
- No user authentication is required to submit the form — it is a public lead-capture form.
- Staff would log into the Supabase dashboard (authenticated) to view and manage submissions.
*/

CREATE TABLE IF NOT EXISTS trial_bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  applicant_type text NOT NULL DEFAULT 'Player',
  age text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  message text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE trial_bookings ENABLE ROW LEVEL SECURITY;

-- Allow anyone (anon) to insert new trial booking submissions
DROP POLICY IF EXISTS "anon_insert_trial_bookings" ON trial_bookings;
CREATE POLICY "anon_insert_trial_bookings"
ON trial_bookings FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Only authenticated users (staff/admin) can view bookings
DROP POLICY IF EXISTS "auth_select_trial_bookings" ON trial_bookings;
CREATE POLICY "auth_select_trial_bookings"
ON trial_bookings FOR SELECT
TO authenticated
USING (true);

-- Only authenticated users can update booking status
DROP POLICY IF EXISTS "auth_update_trial_bookings" ON trial_bookings;
CREATE POLICY "auth_update_trial_bookings"
ON trial_bookings FOR UPDATE
TO authenticated
USING (true) WITH CHECK (true);

-- Only authenticated users can delete bookings
DROP POLICY IF EXISTS "auth_delete_trial_bookings" ON trial_bookings;
CREATE POLICY "auth_delete_trial_bookings"
ON trial_bookings FOR DELETE
TO authenticated
USING (true);

-- Index for sorting by most recent
CREATE INDEX IF NOT EXISTS idx_trial_bookings_created_at ON trial_bookings (created_at DESC);
