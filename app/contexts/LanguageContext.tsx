'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'zh' | 'en' | 'vi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('zh');

  const t = (key: string): string => {
    const translations: Record<Language, Record<string, string>> = {
      zh: {
        // Navigation
        'nav.home': '首页',
        'nav.industry': '行业应用',
        'nav.products': '色母产品',
        'nav.contact': '联系我们',

        // Industry Applications
        'industry.title': '行业应用',
        'industry.modification': '改性抽粒',
        'industry.blowing': '吹膜',
        'industry.sheet': '片材吸塑',
        'industry.casting': '流延工艺',
        'industry.pipe': '管材HDPE',

        // Products
        'products.title': '色母产品',
        'products.black': '黑色母',
        'products.white': '白色母',
        'products.color': '彩色母',
        'products.fill': '填充色母',
        'products.function': '功能色母',

        // Contact
        'contact.title': '联系我们',
        'contact.company': '东莞市志和色母科技有限公司',
        'contact.phone': '电话：15818308513',
        'contact.fax': '传真：0769-8252 1318',
        'contact.email': '邮箱：2523880190@qq.com',
        'contact.address': '地址：广东省东莞市桥头镇石水口银湖二路17号',

        // General
        'home.welcome': '专业色母粒制造商',
        'home.subtitle': '致力于提供高品质的色母粒产品与解决方案',
        'home.learnMore': '了解更多',
        'back': '返回',

        // Industry Details - 改性抽粒
        'industry.modification.intro': '改性抽粒是通过添加添加剂或与其他材料混合，改变塑料的物理性能和功能性的工艺。',
        'industry.modification.materials': '主要材料：PC（聚碳酸酯）、ABS（丙烯腈-丁二烯-苯乙烯）、PBT（聚对苯二甲酸丁二醇酯）、PP（聚丙烯）、PA（聚酰胺）、PEEK（聚醚醚酮）等。',
        'industry.modification.applications': '适用于注塑、吹膜、吸塑等工艺。',
        'industry.modification.cases': '产品案例：工程塑料部件、电子元件、汽车零部件等。',

        // Industry Details - 吹膜
        'industry.blowing.intro': '吹膜工艺是将熔融的塑料通过圆形口模挤出，同时用空气吹胀形成管状薄膜的工艺。',
        'industry.blowing.materials': '主要材料：HDPE、LDPE、LLDPE等。',
        'industry.blowing.cases': '产品案例：垃圾袋、服装袋、农地膜、食品包装膜、工业用膜。',

        // Industry Details - 片材吸塑
        'industry.sheet.intro': '片材成型是指将塑料通过挤出或压延工艺制成片状材料；吸塑是将片材加热软化后，通过真空吸附成型。',
        'industry.sheet.materials': '主要材料：PE、PP、PS、ABS、PET等。',
        'industry.sheet.cases': '产品案例：吸塑包装盒、餐盒、药瓶包装、化妆品包装、一次性餐具。',

        // Industry Details - 流延工艺
        'industry.casting.intro': '流延工艺是将熔融的塑料通过平挤口模挤出，经过骤冷辊冷却形成薄膜的工艺。',
        'industry.casting.materials': '主要材料：PE、PP、TPU等。',
        'industry.casting.cases': '产品案例：工程防水膜、卫生用品、食品包装膜。',

        // Industry Details - 管材HDPE
        'industry.pipe.intro': '高密度聚乙烯（HDPE）管材是一种高强度、耐腐蚀、柔韧性好的塑料管材。',
        'industry.pipe.materials': '主要材料：HDPE混配料，使用PE80或PE100等级的管材专用料。',
        'industry.pipe.cases': '产品案例：给排水系统、天然气输送管道、工业管道。',

        // Products Details - 黑色母
        'products.black.intro': '黑色母粒是以炭黑为主要颜料，与载体树脂混合制成的浓缩着色剂。',
        'products.black.materials': '载体：PE、PP、ABS、PC、PBT、PA等。',
        'products.black.features': '特点：高黑度、高分散性、耐热性强、成本低廉。',
        'products.black.cases': '产品案例：塑料管材、汽车部件、电子电器外壳、包装材料。',

        // Products Details - 白色母
        'products.white.intro': '白色母粒是以钛白粉为主要颜料，与载体树脂混合制成的浓缩着色剂。',
        'products.white.materials': '载体：PE、PP、ABS、PC、PET等。',
        'products.white.features': '特点：高遮盖力、高光泽度、耐候性好、分散均匀。',
        'products.white.cases': '产品案例：食品包装、白色塑料件、家电外壳、医疗器械。',

        // Products Details - 彩色母
        'products.color.intro': '彩色母粒使用有机或无机颜料，可配制成各种颜色的浓缩着色剂。',
        'products.color.materials': '载体：PE、PP、ABS、PC、PA、PET等。',
        'products.color.features': '特点：色泽鲜艳、色差小、稳定性好、色彩丰富。',
        'products.color.cases': '产品案例：玩具、日用品、家电、电子外壳。',

        // Products Details - 填充色母
        'products.fill.intro': '填充色母粒含有高比例的无机填料，用于改善塑料的力学性能并降低成本。',
        'products.fill.materials': '填料：碳酸钙、滑石粉、硅灰石等；载体：PE、PP等。',
        'products.fill.features': '特点：降本增效、改善刚性、提高耐热性、增加尺寸稳定性。',
        'products.fill.cases': '产品案例：管材、板材、型材、薄膜制品。',

        // Products Details - 功能色母
        'products.function.intro': '功能色母粒是为特定功能需求而设计的色母粒，具有除着色外的其他性能。',
        'products.function.types': '类型：抗静电母粒、阻燃母粒、消泡母粒、抗菌母粒等。',
        'products.function.defoamer': '消泡母粒：专为解决水泡问题而开发，强烈吸收PE/PP等塑料的水分。',
        'products.function.cases': '产品案例：垃圾袋、工程防水膜、电子包装、医疗用品。',
      },
      en: {
        // Navigation
        'nav.home': 'Home',
        'nav.industry': 'Industry',
        'nav.products': 'Products',
        'nav.contact': 'Contact',

        // Industry Applications
        'industry.title': 'Industry Applications',
        'industry.modification': 'Modification',
        'industry.blowing': 'Blown Film',
        'industry.sheet': 'Sheet & Thermoforming',
        'industry.casting': 'Cast Film',
        'industry.pipe': 'HDPE Pipe',

        // Products
        'products.title': 'Masterbatch Products',
        'products.black': 'Black Masterbatch',
        'products.white': 'White Masterbatch',
        'products.color': 'Color Masterbatch',
        'products.fill': 'Filler Masterbatch',
        'products.function': 'Functional Masterbatch',

        // Contact
        'contact.title': 'Contact Us',
        'contact.company': 'Dongguan Zhihe Masterbatch Technology Co., Ltd.',
        'contact.phone': 'Phone: 15818308513',
        'contact.fax': 'Fax: 0769-8252 1318',
        'contact.email': 'Email: 2523880190@qq.com',
        'contact.address': 'Address: No. 17 Yinhu 2nd Road, Shuishuikou, Qiaotou Town, Dongguan City, Guangdong Province',

        // General
        'home.welcome': 'Professional Masterbatch Manufacturer',
        'home.subtitle': 'Dedicated to providing high-quality masterbatch products and solutions',
        'home.learnMore': 'Learn More',
        'back': 'Back',

        // Industry Details - Modification
        'industry.modification.intro': 'Modification compounding is the process of changing the physical properties and functionality of plastics by adding additives or mixing with other materials.',
        'industry.modification.materials': 'Main materials: PC (Polycarbonate), ABS, PBT, PP (Polypropylene), PA (Polyamide), PEEK, etc.',
        'industry.modification.applications': 'Suitable for injection molding, blown film, thermoforming and other processes.',
        'industry.modification.cases': 'Product cases: Engineering plastic parts, electronic components, automotive parts, etc.',

        // Industry Details - Blown Film
        'industry.blowing.intro': 'Blown film process extrudes molten plastic through a circular die while simultaneously inflating it with air to form a tubular film.',
        'industry.blowing.materials': 'Main materials: HDPE, LDPE, LLDPE, etc.',
        'industry.blowing.cases': 'Product cases: Garbage bags, garment bags, agricultural films, food packaging films, industrial films.',

        // Industry Details - Sheet & Thermoforming
        'industry.sheet.intro': 'Sheet forming is the process of making plastic into sheet materials through extrusion or calendering; thermoforming heats and softens the sheet, then forms it through vacuum adsorption.',
        'industry.sheet.materials': 'Main materials: PE, PP, PS, ABS, PET, etc.',
        'industry.sheet.cases': 'Product cases: Thermoformed packaging boxes, meal boxes, medicine bottle packaging, cosmetic packaging, disposable tableware.',

        // Industry Details - Cast Film
        'industry.casting.intro': 'Cast film process extrudes molten plastic through a flat die and cools it through chill rollers to form a film.',
        'industry.casting.materials': 'Main materials: PE, PP, TPU, etc.',
        'industry.casting.cases': 'Product cases: Engineering waterproof films, hygiene products, food packaging films.',

        // Industry Details - HDPE Pipe
        'industry.pipe.intro': 'HDPE (High-Density Polyethylene) pipe is a plastic pipe with high strength, corrosion resistance and good flexibility.',
        'industry.pipe.materials': 'Main materials: HDPE compound, using PE80 or PE100 grade pipe specialty materials.',
        'industry.pipe.cases': 'Product cases: Water supply and drainage systems, natural gas pipelines, industrial pipes.',

        // Products Details - Black Masterbatch
        'products.black.intro': 'Black masterbatch is a concentrated colorant made by mixing carbon black as the main pigment with carrier resin.',
        'products.black.materials': 'Carriers: PE, PP, ABS, PC, PBT, PA, etc.',
        'products.black.features': 'Features: High blackness, high dispersibility, strong heat resistance, low cost.',
        'products.black.cases': 'Product cases: Plastic pipes, automotive parts, electronic casings, packaging materials.',

        // Products Details - White Masterbatch
        'products.white.intro': 'White masterbatch is a concentrated colorant made by mixing titanium dioxide as the main pigment with carrier resin.',
        'products.white.materials': 'Carriers: PE, PP, ABS, PC, PET, etc.',
        'products.white.features': 'Features: High covering power, high gloss, good weather resistance, uniform dispersion.',
        'products.white.cases': 'Product cases: Food packaging, white plastic parts, appliance casings, medical devices.',

        // Products Details - Color Masterbatch
        'products.color.intro': 'Color masterbatch uses organic or inorganic pigments to formulate concentrated colorants in various colors.',
        'products.color.materials': 'Carriers: PE, PP, ABS, PC, PA, PET, etc.',
        'products.color.features': 'Features: Bright colors, small color difference, good stability, rich color variety.',
        'products.color.cases': 'Product cases: Toys, daily necessities, appliances, electronic casings.',

        // Products Details - Filler Masterbatch
        'products.fill.intro': 'Filler masterbatch contains a high proportion of inorganic fillers, used to improve mechanical properties and reduce costs.',
        'products.fill.materials': 'Fillers: Calcium carbonate, talc powder, wollastonite, etc.; Carriers: PE, PP, etc.',
        'products.fill.features': 'Features: Cost reduction, improved stiffness, increased heat resistance, enhanced dimensional stability.',
        'products.fill.cases': 'Product cases: Pipes, sheets, profiles, film products.',

        // Products Details - Functional Masterbatch
        'products.function.intro': 'Functional masterbatch is designed for specific functional requirements, with other properties besides coloring.',
        'products.function.types': 'Types: Antistatic masterbatch, flame retardant masterbatch, defoamer masterbatch, antibacterial masterbatch, etc.',
        'products.function.defoamer': 'Defoamer masterbatch: Specifically developed to solve bubble problems, strongly absorbs moisture in PE/PP plastics.',
        'products.function.cases': 'Product cases: Garbage bags, engineering waterproof films, electronic packaging, medical supplies.',
      },
      vi: {
        // Navigation
        'nav.home': 'Trang chủ',
        'nav.industry': 'Ứng dụng',
        'nav.products': 'Sản phẩm',
        'nav.contact': 'Liên hệ',

        // Industry Applications
        'industry.title': 'Ứng dụng ngành công nghiệp',
        'industry.modification': 'Phối hợp cải biến',
        'industry.blowing': 'Kỹ thuật thổi phim',
        'industry.sheet': 'Tấm & Nhuận',
        'industry.casting': 'Kỹ thuật đúc',
        'industry.pipe': 'Ống HDPE',

        // Products
        'products.title': 'Sản phẩm Masterbatch',
        'products.black': 'Masterbatch đen',
        'products.white': 'Masterbatch trắng',
        'products.color': 'Masterbatch màu',
        'products.fill': 'Masterbatch độn',
        'products.function': 'Masterbatch chức năng',

        // Contact
        'contact.title': 'Liên hệ',
        'contact.company': 'Công ty TNHH Công nghệ Masterbatch Zhihe Dongguan',
        'contact.phone': 'Điện thoại: 15818308513',
        'contact.fax': 'Fax: 0769-8252 1318',
        'contact.email': 'Email: 2523880190@qq.com',
        'contact.address': 'Địa chỉ: Số 17 đường Yinhu 2, Shuishuikou, thị trấn Qiaotou, thành phố Dongguan, tỉnh Quảng Đông',

        // General
        'home.welcome': 'Nhà sản xuất Masterbatch chuyên nghiệp',
        'home.subtitle': 'Dedicated to providing high-quality masterbatch products and solutions',
        'home.learnMore': 'Tìm hiểu thêm',
        'back': 'Quay lại',

        // Industry Details - Modification
        'industry.modification.intro': 'Phối hợp cải biến là quá trình thay đổi tính chất vật lý và chức năng của nhựa bằng cách thêm phụ gia hoặc trộn với các vật liệu khác.',
        'industry.modification.materials': 'Vật liệu chính: PC (Polycarbonate), ABS, PBT, PP (Polypropylene), PA (Polyamide), PEEK, v.v.',
        'industry.modification.applications': 'Phù hợp cho các quy trình như ép đúc, thổi phim, nhuận và các quy trình khác.',
        'industry.modification.cases': 'Ví dụ sản phẩm: Chi tiết nhựa kỹ thuật, linh kiện điện tử, phụ tùng ô tô, v.v.',

        // Industry Details - Blown Film
        'industry.blowing.intro': 'Quy trình thổi phim ép nhựa nóng chảy qua khuôn tròn đồng thời thổi phồng bằng không khí để tạo thành phim dạng ống.',
        'industry.blowing.materials': 'Vật liệu chính: HDPE, LDPE, LLDPE, v.v.',
        'industry.blowing.cases': 'Ví dụ sản phẩm: Túi rác, túi quần áo, phim nông nghiệp, phim đóng gói thực phẩm, phim công nghiệp.',

        // Industry Details - Sheet & Thermoforming
        'industry.sheet.intro': 'Đúc tấm là quá trình tạo tấm nhựa thông qua ép hoặc cán; nhuận làm nóng và làm mềm tấm, sau đó tạo hình thông qua hút chân không.',
        'industry.sheet.materials': 'Vật liệu chính: PE, PP, PS, ABS, PET, v.v.',
        'industry.sheet.cases': 'Ví dụ sản phẩm: Hộp đóng gói nhuận, hộp cơm, đóng gói chai thuốc, đóng gói mỹ phẩm, dụng cụ ăn uống dùng một lần.',

        // Industry Details - Cast Film
        'industry.casting.intro': 'Quy trình đúc phim ép nhựa nóng chảy qua khuôn phẳng và làm nguội qua con lăn để tạo thành phim.',
        'industry.casting.materials': 'Vật liệu chính: PE, PP, TPU, v.v.',
        'industry.casting.cases': 'Ví dụ sản phẩm: Phim chống thấm kỹ thuật, sản phẩm vệ sinh, phim đóng gói thực phẩm.',

        // Industry Details - HDPE Pipe
        'industry.pipe.intro': 'Ống HDPE (Polyetylen mật độ cao) là loại ống nhựa có độ bền cao, chống ăn mòn và độ linh hoạt tốt.',
        'industry.pipe.materials': 'Vật liệu chính: Hỗn hợp HDPE, sử dụng vật liệu chuyên dụng ống cấp PE80 hoặc PE100.',
        'industry.pipe.cases': 'Ví dụ sản phẩm: Hệ thống cấp thoát nước, đường ống khí đốt tự nhiên, ống công nghiệp.',

        // Products Details - Black Masterbatch
        'products.black.intro': 'Masterbatch đen là chất màu cô đặc được tạo ra bằng cách trộn carbon đen làm chất màu chính với nhựa mang.',
        'products.black.materials': 'Nhựa mang: PE, PP, ABS, PC, PBT, PA, v.v.',
        'products.black.features': 'Đặc điểm: Độ đen cao, độ phân tán cao, khả năng chịu nhiệt mạnh, chi phí thấp.',
        'products.black.cases': 'Ví dụ sản phẩm: Ống nhựa, phụ tùng ô tô, vỏ thiết bị điện tử, vật liệu đóng gói.',

        // Products Details - White Masterbatch
        'products.white.intro': 'Masterbatch trắng là chất màu cô đặc được tạo ra bằng cách trộn titanium dioxide làm chất màu chính với nhựa mang.',
        'products.white.materials': 'Nhựa mang: PE, PP, ABS, PC, PET, v.v.',
        'products.white.features': 'Đặc điểm: Khả năng che phủ cao, độ bóng cao, khả năng chịu thời tiết tốt, độ phân tán đồng đều.',
        'products.white.cases': 'Ví dụ sản phẩm: Đóng gói thực phẩm, chi tiết nhựa trắng, vỏ thiết bị gia dụng, thiết bị y tế.',

        // Products Details - Color Masterbatch
        'products.color.intro': 'Masterbatch màu sử dụng chất màu hữu cơ hoặc vô cơ để tạo ra chất màu cô đặc trong nhiều màu sắc khác nhau.',
        'products.color.materials': 'Nhựa mang: PE, PP, ABS, PC, PA, PET, v.v.',
        'products.color.features': 'Đặc điểm: Màu sắc rực rỡ, chênh lệch màu nhỏ, ổn định tốt, đa dạng màu sắc.',
        'products.color.cases': 'Ví dụ sản phẩm: Đồ chơi, nhu yếu phẩm hàng ngày, thiết bị gia dụng, vỏ thiết bị điện tử.',

        // Products Details - Filler Masterbatch
        'products.fill.intro': 'Masterbatch độn chứa tỷ lệ cao chất độn vô cơ, được sử dụng để cải thiện tính chất cơ học và giảm chi phí.',
        'products.fill.materials': 'Chất độn: Canxi carbonat, bột talc, wollastonite, v.v.; Nhựa mang: PE, PP, v.v.',
        'products.fill.features': 'Đặc điểm: Giảm chi phí, cải thiện độ cứng, tăng khả năng chịu nhiệt, tăng độ ổn định kích thước.',
        'products.fill.cases': 'Ví dụ sản phẩm: Ống, tấm, thanh, sản phẩm phim.',

        // Products Details - Functional Masterbatch
        'products.function.intro': 'Masterbatch chức năng được thiết kế cho các yêu cầu chức năng cụ thể, có các tính năng khác ngoài màu sắc.',
        'products.function.types': 'Loại: Masterbatch tĩnh điện, Masterbatch chống cháy, Masterbatch khử bọt, Masterbatch kháng khuẩn, v.v.',
        'products.function.defoamer': 'Masterbatch khử bọt: Được phát triển đặc biệt để giải quyết vấn đề bọt khí, hấp thụ mạnh độ ẩm trong nhựa PE/PP.',
        'products.function.cases': 'Ví dụ sản phẩm: Túi rác, phim chống thấm kỹ thuật, đóng gói điện tử, vật dụng y tế.',
      },
    };

    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}