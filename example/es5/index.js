$(document).ready(function () {
    $(".scrollable-select").each(function () {
        let selectId = $(this).attr('select-id')
        let optionsList = $(this).find('option')
        let defaultOption = $(this).find('option[selected]').val()

        $(this).after('<div id="' + selectId + '" class="scrollable_select_div"></div>')
        $('#' + selectId).append(
                '<div class="select_arrow">' +
                    '<button id="rebuild">rebuild</button>' + 
                    '<button id="prev">prev</button>' + 
                    '<button id="next">next</button>' +
                    '<button id="unbind">unbind</button>' +
                '</div>')

        let el = document.getElementById(selectId)
        let select = new Select(el, {
            data: getData(optionsList)
        })

        function getData(optionsList) {
            let data = []
            for (let i = 0; i < optionsList.length; i++) {
                let optionText = optionsList[i].text
                let optionValue = optionsList[i].value
                data.push({
                    id: optionValue,
                    text: optionText
                })
            }
            return data
        }

        select.value(defaultOption)
        select.on('change', function (newValue) {
            let select = $(this).attr('select_id');
            $(".scrollable-select[select-id='" + select + "']").val(newValue).change()
            $(this).find('option[value=' + newValue + ']').prop('selected', true)
        })

        document.getElementById('prev_' + selectId).addEventListener('click', function () {
          select.prev()
        }, false)

        document.getElementById('next_' + selectId).addEventListener('click', function () {
          select.next()
        }, false)
      
        document.getElementById('rebuild_' + selectId).addEventListener('click', function () {
          select.setData(getData(optionsList))
        }, false)

        document.getElementById('unbind_' + selectId).addEventListener('click', function () {
          select.unbind()
        }, false)

    });
});

