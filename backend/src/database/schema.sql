create table public.search_history (
  id uuid not null default gen_random_uuid (),
  user_id uuid null,
  search_term character varying(255) not null,
  search_results jsonb null,
  created_at timestamp with time zone null default now(),
  constraint search_history_pkey primary key (id),
  constraint search_history_user_id_fkey foreign KEY (user_id) references users (id) on delete CASCADE
) TABLESPACE pg_default;