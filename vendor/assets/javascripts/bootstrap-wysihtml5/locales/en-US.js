/**
 * Japanese translation for bootstrap-wysihtml5
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define('bootstrap.wysihtml5.ja-JP', ['jquery', 'bootstrap.wysihtml5'], factory);
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function($){
    $.fn.wysihtml5.locale["ja-JP"] = {
        font_styles: {
            normal: "通常の文字",
            h1: "H1",
            h2: "H2",
            h3: "H3",
            h4: "H4",
            h5: "H5",
            h6: "H6",
            p: "段落"
        },
        emphasis: {
            bold: "太字",
            italic: "斜体",
            underline: "下線"
        },
        lists: {
            unordered: "点字リスト",
            ordered: "数字リスト",
            outdent: "左寄せ",
            indent: "右寄せ"
        },
        link: {
            insert: "リンクの挿入",
            cancel: "キャンセル"
        },
        image: {
            insert: "画像の挿入",
            cancel: "キャンセル"
        },
        html: {
            edit: "HTMLを編集"
        },
        colours: {
            black: "黒色",
            silver: "シルバー",
            gray: "グレー",
            maroon: "栗色",
            red: "赤色",
            purple: "紫色",
            green: "緑色",
            olive: "オリーブ",
            navy: "ネイビー",
            blue: "青色",
            orange: "オレンジ"
        }

    };
}));
