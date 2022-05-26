# GrubGrab ERD

## users

- id SERIAL PRIMARY NOT NULL
- role_id INTEGER REFERENCES roles(id) ON DELETE CASCADE,
- email CITEXT NOT NULL
- password VARCHAR(100) NOT NULL
- name VARCHAR(50) NOT NULL
- surname VARCHAR(50) NOT NULL
- address VARCHAR(50) NOT NULL
- city VARCHAR(50) NOT NULL
- country VARCHAR(50) NOT NULL
- phone_number VARCHAR(20) NOT NULL

## roles

- id SERIAL PRIMARY NOT NULL,
- role VARCHAR(50) NOT NULL

## categories

- id SERIAL PRIMARY NOT NULL,
- name VARCHAR(50)

## menu_items

- id SERIAL PRIMARY NOT NULL,
- category_id INTEGER REFERENCES roles(id) ON DELETE CASCADE,
- name VARCHAR(50) NOT NULL,
- price INTEGER NOT NULL,
- image_url TEXT,

## order_histories

- id SERIAL PRIMARY NOT NULL,
- total INTEGER NOT NULL
- order_date TIMESTAMP NOT NULL
- completed_date TIMESTAMP NOT NULL

## order_history_menu_item_bridge

- id SERIAL PRIMARY NOT NULL,
- order_history_id INTEGER REFERENCES order_histories(id) ON DELETE CASCADE
- menu_item_id INTEGER REFERENCES menu_items(id) ON DELETE CASCADE,

## payment_details

- id SERIAL PRIMARY NOT NULL
- user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
- card_number VARCHAR(100) NOT NULL,
- total INTEGER NOT NULL
