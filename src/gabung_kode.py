import os

def gabungkan_kode(direktori_awal, file_output):
    """
    Menggabungkan semua file kode dari direktori yang ditentukan ke dalam satu file teks.

    Args:
      direktori_awal: Path ke direktori utama proyek Anda (dalam kasus ini, 'src').
      file_output: Nama file teks untuk menyimpan kode yang digabungkan.
    """
    kode_digabungkan = []
    ekstensi_file_kode = ('.css', '.jsx', '.svg')  # Tentukan ekstensi file yang akan disertakan

    for root, _, files in os.walk(direktori_awal):
        for file in files:
            if file.endswith(ekstensi_file_kode):
                path_file = os.path.join(root, file)
                try:
                    with open(path_file, 'r', encoding='utf-8') as f:
                        konten = f.read()
                        kode_digabungkan.append(f"--- START OF {path_file} ---\n")
                        kode_digabungkan.append(konten)
                        kode_digabungkan.append(f"\n--- END OF {path_file} ---\n\n")
                except Exception as e:
                    kode_digabungkan.append(f"--- GAGAL MEMBACA {path_file}: {e} ---\n\n")

    try:
        with open(file_output, 'w', encoding='utf-8') as f:
            f.write("".join(kode_digabungkan))
        print(f"Berhasil menggabungkan semua kode ke dalam '{file_output}'")
    except Exception as e:
        print(f"Gagal menulis ke file output: {e}")

# --- Cara Penggunaan ---
# 1. Simpan kode ini sebagai file Python (misalnya, 'gabung_kode.py')
#    di dalam direktori C:\Users\rakhs\Documents\TRPL\Semester 3\Pemrograman Berbasis Platform\Materi 8 ReactJS\website-penjahit\
# 2. Pastikan Anda berada di direktori tersebut di terminal Anda.
# 3. Jalankan skrip dengan perintah: python gabung_kode.py

if __name__ == '__main__':
    # Direktori 'src' yang berisi semua kode Anda
    direktori_sumber = 'src'
    # Nama file hasil penggabungan
    file_hasil = 'kode_gabungan.txt'
    gabungkan_kode(direktori_sumber, file_hasil)