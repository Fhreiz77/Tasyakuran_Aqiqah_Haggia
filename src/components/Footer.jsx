import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#FF90BB] to-[#FFC1DA] text-white py-8 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p 
          className="text-2xl mb-2 font-bold" 
          style={{fontFamily: 'Georgia, serif'}}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Terima Kasih
        </motion.p>
        <motion.p 
          className="mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Atas kehadiran dan doa restunya
        </motion.p>
        
        <motion.div 
          className="border-t border-[#F8F8E1] pt-4 mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-sm opacity-90">
            Tasyakuran Tasmiyah & Aqiqah
          </p>
          <p className="text-xl font-bold mt-2" style={{fontFamily: 'Brush Script MT, cursive'}}>
            Hagia Sheena Fadilla
          </p>
          <p className="text-sm mt-2">
            Putri dari Wahyu & Violetta
          </p>
        </motion.div>
        
        <motion.div 
          className="border-t border-[#F8F8E1] pt-4 mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.75 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-xs opacity-75">
            © 2026 - Dibuat dengan penuh kasih sayang
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
