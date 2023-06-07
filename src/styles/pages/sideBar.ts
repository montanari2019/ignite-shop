import { styled } from "..";

export const SideBarContainer = styled('div',{
    padding: '1.75rem 3rem',
    width: '30rem',
    height: '100vh',
    background: '$gray800',
    position: 'absolute',
    right:0,
    
    display: 'flex',
    
    flexDirection: 'column',
    // alignItems: "end"
    // justifyContent: 'space-between'

})

export const ClosedIcon = styled('div',{
    
    width: '100%',
    display:   'flex',
    justifyContent:'space-between',

    span:{
        width: 10
    }


})

export const SidbarBody = styled('div',{
    marginTop: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    strong:{
        fontSize: "1.25rem",
        fontWeight: 'bold',
    }
})

export const SidbarItem = styled('div',{
    marginTop: '2rem',

    display: 'flex',
    gap: '1.25rem',

    // justifyContent: 's',
    
    
    div:{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        
        p:{
            fontSize: '1.125rem',
        },
        
        strong:{
            fontSize: '1.125rem',
            
        },
        
        button:{
            cursor: 'pointer',
            background: 'transparent',
            color: '$green500',
            fontSize: '1rem',
            fontWeight: 'bold',
            border: 'none',
            textAlign: 'left',
            transition: 'all 0.4s',
            
            
            
            
            '&:hover':{
                color: '$green300',
                transition: 'all 0.4s',
                
                
            }
        },
    },
})




export const ImageItemSideBar = styled('div', {
    width: '6.25rem',
    height: '6.25rem',
    background: "linear-gradient(180deg, #1EA483 0%, #7465D4 100%)",
    borderRadius: 10
})


export const Footer = styled('footer', {

    margin:' 1rem 0',


    p:{
        fontSize: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0.5rem 0',
    },

    strong:{
        fontSize: '1.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0.5rem 0',
    },

    button:{
        width: '100%',
        height: '4.31rem',

        border: 'none',
        borderRadius: 8,
        color: '$white',
        fontWeight: 'bold',
        fontSize: '1.125rem',
        cursor: 'pointer',

        background: '$green500',
        transition: 'all 0.4s',

        '&:hover':{
            background: '$green300',
            transition: 'all 0.4s',
            
            
        }


    }
})
