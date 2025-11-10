import React from 'react';
import { Container } from 'react-bootstrap';

// Daftar data FAQ
const faqData = [
    {
        question: 'Apakah Warung Bang Wahid melayani pesanan online?',
        answer: 'Kami melayani pesan antar. Anda bisa memesan lewat tombol "Pesan Online" di atas atau memesan lewat layanan GoFood dengan menekan tombol "Pesan lewat GoFood" yang ada di atas.',
    },
    {
        question: 'Berapa jam operasional Warung Bang Wahid?',
        answer: 'Kami buka setiap hari, dari Senin sampai Minggu, pukul 10.00 hingga 20.00 WIB.',
    },
    {
        question: 'Apakah makanan di Warung Bang Wahid halal?',
        answer: 'Ya, semua bahan yang kami gunakan dijamin halal.',
    },
    {
        question: 'Apa saja metode pembayaran yang tersedia di Warung Bang Wahid?',
        answer: 'Kami menerima pembayaran secara tunai, QRIS, atau transfer bank.',
    },
];

function FAQComponentFlat() {
    return (
        <Container className="my-5">
            <h2 className="text-center mb-5 text-muted">Pertanyaan yang Sering Diajukan (FAQ)</h2>
            <h5 className="text-center mb-5 text-muted">Semua Tentang Warung Bang Wahid, Dijawab di Sini.</h5>

            {faqData.map((item, index) => (
                <div key={index} className="mb-4 p-3 border rounded bg-dark">
                    {/* Pertanyaan menggunakan heading untuk penekanan */}
                    <h5 className="text-white">
                        <span className="text-warning me-2">Q:</span> {item.question}
                    </h5>

                    {/* Jawaban sebagai paragraf biasa */}
                    <p className="text-light mt-2 mb-0 ms-4">
                        <span className="text-white me-2 fw-bold">A:</span> {item.answer}
                    </p>
                </div>
            ))}
        </Container>
    );
}

export default FAQComponentFlat;