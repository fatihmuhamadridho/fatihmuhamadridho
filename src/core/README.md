# CLEAN ARCHITECTURE

## Model (DONE)

- Termasuk ke dalam Domain (Enterprise Business Rules).
- Definisi: representasi inti dari objek bisnis (misalnya User, Pokemon).
- Ciri: berdiri sendiri, tidak peduli API/DB/UI.
- Tugas: punya aturan dasar atas dirinya sendiri.

✔️ Catatan:

- Model/Entity boleh punya method (misalnya verifyPassword(), calculateWeakness()).
- Dia pure, gak ada ketergantungan eksternal.

## Repository

- Termasuk ke dalam Domain.
- Definisi: kontrak abstrak untuk akses data (findById, save, dll).
- Ciri: hanya deklarasi, gak ada implementasi teknis.
- Tugas: menjelaskan apa yang use case butuhkan untuk mengakses data.

✔️ Catatan:

- Repository tidak “dimiliki” use case, tapi dipakai oleh use case.
- Jadi kalau ada perubahan di DB/API, kontrak ini gak berubah, hanya implementasinya yang ganti.

## UseCase

- Termasuk ke dalam Application Layer.
- Definisi: logic bisnis aplikasi (alur/flow).
- Ciri: mengatur langkah-langkah sesuai skenario.
- Tugas: mengorkestrasi entity, repository, service, agar mencapai tujuan bisnis.

✔️ Contoh:

- Pokemon Weakness: alurnya data pokemon → detail → type → weakness chart → hasil weakness.
- Login MFA: username+password → session token → verifikasi OTP → access token.

👉 Catatan tambahan:

- Use case tidak boleh tahu detail DB/API.
- Kalau butuh data, dia cukup panggil kontrak repository.

<!-- 2 -->

Tugas: handle error yang relevan dengan alur bisnis.

Contoh error:

User gak ditemukan → UserNotFoundError.

Password salah → InvalidCredentialsError.

Action:

Tangkap error dari repo/service, translate jadi error bisnis.

Lempar lagi ke Controller.

## Repository Impl

- Termasuk ke dalam Interface Adapters.
- Definisi: implementasi nyata dari repository.
- Ciri: tahu cara akses DB/API, mapping raw data → domain model.
- Tugas:
  1. Ambil data dari DB/API.
  2. Convert raw data (tuple, base64, snake_case) → Entity/Model yang domain butuhkan.

✔️ Catatan:

- Repo Impl tidak menjalankan flow bisnis (itu kerjaannya use case).
- Repo Impl hanya supply data yang sudah “bersih” untuk domain.

<!-- 2 -->

- Tugas: handle error teknis dari data source (DB, API).
- Contoh error:
  - Timeout DB/API.
  - Response API "status: failed".
  - Data gak sesuai schema.
- Action:
  - Konversi error teknis → domain-level exception.
  - Jangan return raw error (misalnya Axios error).

## Controller

- Termasuk ke dalam Interface Adapter / Presenter.
- Definisi: entry point dari dunia luar (HTTP request, UI event).
- Ciri: hanya jadi penghubung framework (Express, Next.js, React event) → Use Case.
- Tugas:
  1. Terima input (req.body, params, UI event).
  2. Panggil use case.
  3. Format hasil/error ke response (HTTP JSON, UI state).

✔️ Catatan:

- Controller tidak boleh langsung pakai Repo Impl.
- Controller harus lewat Use Case, baru Use Case yang pakai Repo Impl.

<!-- 2 -->

Tugas: format error untuk dikembalikan ke dunia luar (HTTP/UI).

Contoh error:

UserNotFound → HTTP 404.

InvalidCredentials → HTTP 401.

Error tak dikenal → HTTP 500.

Action:

Tangkap semua error dari Use Case.

Map ke response sesuai protokol (REST JSON, GraphQL error, UI state).
