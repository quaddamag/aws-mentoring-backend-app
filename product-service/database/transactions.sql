CREATE extension IF NOT EXISTS "uuid-ossp";

CREATE TABLE products (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    title text NOT NULL,
    description text NOT NULL,
    price int NOT NULL
);

CREATE TABLE stocks (
    product_id uuid,
    FOREIGN KEY ("product_id") REFERENCES "products" ("id"),
    count int
);

INSERT INTO
    products (title, description, price)
VALUES
    ('Grenlander', 'ENRI U08 205/55R16 94W', '133'),
    ('Cordiant', 'Winter Drive 195/65R15 91T', '152'),
    ('Apollo', 'Alnac 4G Winter 205/55R16 91T', '177'),
    ('Fronway', 'Frontour Vanderful A/S 225/75R16C 121/120Q', '291'),
    ('Fronway', 'IcePower 989 225/70R15C 112/110Q', '242'),
    ('Tigar', 'High Performance 205/55R16 94V', '172'),
    ('Cordiant', 'Comfort 2 205/55R16 94V', '133'),
    ('Matador', 'MP 47 Hectorra 3 205/55R16 91H', '161'),
    ('Cordiant', 'Sport 3 195/65R15 91V', '115'),
    ('Nokian Tyres', 'Nordman SX3 205/55R16 91H', '168'),
    ('Kumho', 'Ecowing ES31 205/55R16 91V', '156'),
    ('Cordiant', 'Winter Drive 2 195/65R15 95T', '148'),
    ('Cordiant', 'Road Runner 205/60R16 92H', '130'),
    ('Tigart', 'Winter 205/55R16 94H', '195'),
    ('Pirelli', 'Cinturato P7 205/55R16 91V', '209'),
    ('Nokian Tyres', 'Hakka Green 3 205/55R16 94H', '130');

INSERT INTO
    stocks (product_id, count)
VALUES
    ('0ad38f00-12de-4646-a10e-3bbfe0e2310f', 14),
    ('5344fb87-d442-4f1b-81d5-a117cf83d92d', 19),
    ('5b1e8b03-fcc4-47ab-953d-73b663a2e2b3', 34),
    ('f44766bc-4823-476a-aab2-a193de560c39', 2),
    ('47a9446c-ec63-4dea-8bab-891bb2f1ecfe', 8),
    ('92698f20-e765-48de-bf6c-93c4a7eacee1', 14),
    ('8f781849-a5d5-411f-9746-81ce9704b66d', 22),
    ('8708a52b-fde8-460b-a71a-b14f37c091f7', 41),
    ('415aee23-5732-4da3-918a-ca407f6746f9', 4),
    ('4c12ae4c-c1f4-4e0b-baed-0aae53f3ef97', 9),
    ('2dc1aa2b-15f8-4459-ba0a-9ad738e97b9b', 16),
    ('4f127eb1-82b2-4521-98bc-379ab4678c3e', 26),
    ('a4e50a91-1657-4217-b09f-cb22eff951da', 3),
    ('e97c0f73-a400-4c1f-9cff-9a74d0d793e7', 10),
    ('36fdc28d-127a-4b91-94d5-bec71ae39ae0', 15),
    ('b1e66690-f4ed-4804-b99c-d9336903897e', 27);
